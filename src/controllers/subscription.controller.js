const prisma = require('../prisma/client');
const { addMonthsToDate } = require('../utils/date-utils');

const requestSubscription = async (req, res) => {
  try {
    const { userId, membershipId, proofFile } = req.body;

    if (!userId || !membershipId || !proofFile) {
      return res.status(400).json({ error: 'Faltan datos obligatorios: userId, membershipId y proofFile' });
    }

    const now = new Date();

    // ✅ Paso 1: Actualizar todas las suscripciones 'aprobado' vencidas
    const subsToCheck = await prisma.subscriptions.findMany({
      where: {
        user_id: Number(userId),
        state: { in: ['aprobado', 'pendiente'] },
      },
    });

    for (const sub of subsToCheck) {
      if (new Date(sub.end_date) < now) {
        await prisma.subscriptions.update({
          where: { id: sub.id },
          data: { state: 'vencido' },
        });
      }
    }

    // ✅ Paso 2: Verificar si queda alguna suscripción activa o pendiente aún válida
    const stillActive = await prisma.subscriptions.findFirst({
      where: {
        user_id: Number(userId),
        state: { in: ['pendiente', 'aprobado'] },
      },
    });

    if (stillActive) {
      return res.status(400).json({ error: 'Ya tienes una suscripción activa o pendiente.' });
    }

    // Paso 3: Obtener datos del plan de membresía
    const membership = await prisma.memberships.findUnique({
      where: { id: Number(membershipId) }
    });

    if (!membership) {
      return res.status(404).json({ error: 'Plan de membresía no encontrado' });
    }

    const months = parseInt(membership.duration); // Ej: "1 mes" → 1
    if (isNaN(months)) {
      return res.status(400).json({ error: 'Duración de la membresía inválida (debe ser número de meses)' });
    }

    const startDate = new Date();
    const endDate = addMonthsToDate(startDate, months);

    // Paso 4: Crear nueva suscripción
    const subscription = await prisma.subscriptions.create({
      data: {
        user_id: userId,
        membership_id: membershipId,
        proof_file: proofFile,
        start_date: startDate,
        end_date: endDate,
        state: 'pendiente'
      }
    });

    res.status(201).json({
      message: 'Solicitud de suscripción enviada con éxito',
      subscription
    });

  } catch (error) {
    console.error('Error al crear la suscripción:', error);
    res.status(500).json({ error: 'Error interno al crear la suscripción' });
  }
};

// GET /subscriptions/pending → Ver solicitudes pendientes
const getPendingSubscriptions = async (req, res) => {
  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: { state: 'pendiente' },
      include: {
        user: { include: { client: true } },
        membership: true,
      },
    });
    res.json(subscriptions);
  } catch (error) {
    console.error('Error al obtener suscripciones pendientes:', error);
    res.status(500).json({ error: 'Error interno al obtener solicitudes pendientes' });
  }
};

// PUT /subscriptions/:id/approve → Aprobar una suscripción
const approveSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await prisma.subscriptions.update({
      where: { id: Number(id) },
      data: { state: 'aprobado' },
      include: { user: true },
    });

    // Crear registro en la tabla clients si no existe
    const existingClient = await prisma.clients.findUnique({
      where: { user_id: updated.user_id },
    });

    if (!existingClient) {
      await prisma.clients.create({
        data: {
          user_id: updated.user_id,
          ci: "—", // Campo por defecto, puede actualizarse luego
          birthdate: null,
        },
      });
    }

    return res.status(200).json({
      message: 'Suscripción aprobada correctamente',
      subscription: updated,
    });
  } catch (error) {
    console.error('Error al aprobar suscripción:', error);
    return res.status(500).json({ error: 'Error interno al aprobar la suscripción' });
  }
};

// PUT /subscriptions/:id/reject → Rechazar una suscripción
const rejectSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await prisma.subscriptions.update({
      where: { id: Number(id) },
      data: { state: 'rechazado' }
    });

    return res.status(200).json({
      message: 'Suscripción rechazada correctamente',
      subscription: updated,
    });
  } catch (error) {
    console.error('Error al rechazar suscripción:', error);
    return res.status(500).json({ error: 'Error interno al rechazar la suscripción' });
  }
};

// ✅ GET /subscriptions/user/:userId → Obtener suscripción activa o pendiente de un cliente (con verificación de vencimiento)
const getSubscriptionByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // 1. Buscar la suscripción más reciente del usuario (de cualquier estado)
    let subscription = await prisma.subscriptions.findFirst({
      where: {
        user_id: Number(userId),
        state: { in: ['pendiente', 'aprobado', 'rechazado', 'vencido'] }
      },
      include: {
        membership: true
      },
      orderBy: {
        start_date: 'desc'
      }
    });

    if (!subscription) {
      return res.json(null); // No hay ninguna suscripción
    }

    // 2. Verificar si está vencida y actualizar si corresponde
    const now = new Date();
    if (subscription.state === 'aprobado' && new Date(subscription.end_date) < now) {
      subscription = await prisma.subscriptions.update({
        where: { id: subscription.id },
        data: { state: 'vencido' },
      });
    }

    res.json(subscription);
  } catch (error) {
    console.error('Error al obtener la suscripción del cliente:', error);
    res.status(500).json({ error: 'Error interno al obtener la suscripción del cliente' });
  }
};

// GET /subscriptions → todas las suscripciones
const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await prisma.subscriptions.findMany({
      include: {
        user: {
          include: { client: true },
        },
        membership: true,
      },
    });
    res.json(subscriptions);
  } catch (error) {
    console.error('Error al obtener todas las suscripciones:', error);
    res.status(500).json({ error: 'Error interno al obtener suscripciones' });
  }
};

// PUT /subscriptions/:id/update-dates → Actualizar fechas de suscripción
const updateSubscriptionDates = async (req, res) => {
  const { id } = req.params;
  const { start_date, end_date } = req.body;

  try {
    const updated = await prisma.subscriptions.update({
      where: { id: Number(id) },
      data: {
        start_date: new Date(start_date),
        end_date: new Date(end_date)
      }
    });

    return res.status(200).json({
      message: 'Fechas de suscripción actualizadas correctamente',
      subscription: updated
    });
  } catch (error) {
    console.error('Error al actualizar fechas de suscripción:', error);
    return res.status(500).json({ error: 'Error interno al actualizar fechas' });
  }
};

// GET /subscriptions/history/:userId → Historial completo sin lógica extra
const getUserSubscriptionHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: {
        user_id: Number(userId)
      },
      select: {
        id: true,
        user_id: true,
        state: true,
        start_date: true,
        end_date: true,
        membership: {
          select: {
            id: true,
            name: true,
            price: true,
            duration: true,
          }
        }
      },
      orderBy: {
        start_date: 'desc'
      }
    });

    res.status(200).json(subscriptions);
  } catch (error) {
    console.error("❌ Error al obtener historial de suscripciones:", error);
    res.status(500).json({ error: "Error interno al obtener historial del usuario." });
  }
};

// ✅ GET /subscriptions/latest/:userId → Última suscripción del cliente
const getLatestSubscriptionByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // 1. Buscar la suscripción más reciente del usuario
    let latest = await prisma.subscriptions.findFirst({
      where: {
        user_id: Number(userId),
      },
      include: {
        membership: true,
      },
      orderBy: {
        start_date: 'desc'
      }
    });

    if (!latest) {
      return res.json(null);
    }

    // 2. Verificar si está vencida
    const now = new Date();
    if (latest.state === 'aprobado' && new Date(latest.end_date) < now) {
      // Actualizar estado a 'vencido'
      latest = await prisma.subscriptions.update({
        where: { id: latest.id },
        data: { state: 'vencido' },
        include: { membership: true }
      });
    }

    res.json(latest);
  } catch (error) {
    console.error('Error al obtener la última suscripción:', error);
    res.status(500).json({ error: 'Error interno al obtener la última suscripción' });
  }
};

module.exports = {
  requestSubscription,
  getPendingSubscriptions,
  approveSubscription,
  rejectSubscription,
  getSubscriptionByUser,
  getLatestSubscriptionByUser,
  getAllSubscriptions,
  updateSubscriptionDates,
  getUserSubscriptionHistory,
};
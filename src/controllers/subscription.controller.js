const prisma = require('../prisma/client');
const { addMonthsToDate } = require('../utils/date-utils');

// POST /subscriptions → Cliente solicita una membresía
const requestSubscription = async (req, res) => {
  try {
    const { userId, membershipId, proofFile } = req.body;

    if (!userId || !membershipId || !proofFile) {
      return res.status(400).json({ error: 'Faltan datos obligatorios: userId, membershipId y proofFile' });
    }

    // Obtener la duración del plan
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

    // Crear la suscripción
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

    // Crear registro en la tabla `clients` si no existe
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

// GET /subscriptions/user/:userId → Obtener suscripción activa o pendiente de un cliente
const getSubscriptionByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const subscription = await prisma.subscriptions.findFirst({
      where: {
        user_id: Number(userId),
        state: { in: ['pendiente', 'aprobado'] }
      },
      include: {
        membership: true
      },
      orderBy: {
        start_date: 'desc'
      }
    });

    if (!subscription) {
      return res.json(null); // el cliente aún no tiene suscripción activa o pendiente
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

module.exports = {
  requestSubscription,
  getPendingSubscriptions,
  approveSubscription,
  rejectSubscription,
  getSubscriptionByUser,
  getAllSubscriptions,
};
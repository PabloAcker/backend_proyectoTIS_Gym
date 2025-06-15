const prisma = require('../prisma/client');

// POST /access → Alternar entrada/salida automáticamente
const registerAccess = async (req, res) => {
  const { rfid_code } = req.body;

  if (!rfid_code) {
    return res.status(400).json({ error: 'El código RFID es obligatorio' });
  }

  try {
    // Verificar si la tarjeta está vinculada a una suscripción válida
    const access = await prisma.rfid_access.findFirst({
      where: {
        rfid_code,
        subscription: {
          state: 'aprobado',
          start_date: { lte: new Date() },
          end_date: { gte: new Date() }
        }
      },
      include: {
        subscription: {
          include: {
            user: true,
            membership: true
          }
        }
      }
    });

    if (!access) {
      return res.status(403).json({ error: 'Acceso denegado. Tarjeta inválida o suscripción inactiva' });
    }

    // Buscar último log sin salida
    const lastLog = await prisma.rfid_logs.findFirst({
      where: {
        rfid_access_id: access.id,
        exit_date: null
      },
      orderBy: { entry_date: 'desc' }
    });

    let responseMessage = '';
    let logData;

    if (!lastLog) {
      // Si no hay log sin salida → registrar entrada
      logData = await prisma.rfid_logs.create({
        data: {
          rfid_access_id: access.id,
          subscription_id: access.subscription_id,
          entry_date: new Date()
        }
      });
      responseMessage = 'Entrada registrada correctamente';
    } else {
      // Si hay log sin salida → registrar salida
      logData = await prisma.rfid_logs.update({
        where: { id: lastLog.id },
        data: { exit_date: new Date() }
      });
      responseMessage = 'Salida registrada correctamente';
    }

    res.json({
      message: responseMessage,
      log: logData,
      cliente: {
        nombre: access.subscription.user.name,
        apellido: access.subscription.user.lastname,
        plan: access.subscription.membership.name
      }
    });

  } catch (error) {
    console.error('Error al registrar acceso/salida:', error);
    res.status(500).json({ error: 'Error interno al registrar entrada/salida' });
  }
};

// PUT /access/:id/exit → Registrar salida en rfid_logs
const registerExit = async (req, res) => {
  const { id } = req.params;

  try {
    const lastLog = await prisma.rfid_logs.findFirst({
      where: {
        rfid_access_id: Number(id),
        exit_date: null
      },
      orderBy: {
        entry_date: 'desc'
      }
    });

    if (!lastLog) {
      return res.status(404).json({ error: 'No hay acceso pendiente de salida para esta tarjeta' });
    }

    const updated = await prisma.rfid_logs.update({
      where: { id: lastLog.id },
      data: {
        exit_date: new Date()
      }
    });

    res.json({ message: 'Salida registrada correctamente', log: updated });
  } catch (error) {
    console.error('Error al registrar salida:', error);
    res.status(500).json({ error: 'Error al registrar salida' });
  }
};

// GET /access → Obtener todos los accesos (desde rfid_logs)
const getAllAccesses = async (req, res) => {
  try {
    const logs = await prisma.rfid_logs.findMany({
      include: {
        rfid_access: true,
        subscription: {
          include: {
            user: true,
            membership: true
          }
        }
      },
      orderBy: {
        entry_date: 'desc'
      }
    });

    const formatted = logs.map((log) => ({
      id: log.id,
      rfid_code: log.rfid_access.rfid_code,
      entry_date: log.entry_date,
      exit_date: log.exit_date,
      nombre: log.subscription?.user?.name || '',
      apellido: log.subscription?.user?.lastname || '',
      plan: log.subscription?.membership?.name || ''
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error al obtener accesos:', error);
    res.status(500).json({ error: 'Error interno al obtener accesos' });
  }
};

// GET /access/:id
const getAccessById = async (req, res) => {
  const { id } = req.params;

  try {
    const log = await prisma.rfid_logs.findUnique({
      where: { id: Number(id) },
      include: {
        rfid_access: true,
        subscription: {
          include: {
            user: true,
            membership: true
          }
        }
      }
    });

    if (!log) {
      return res.status(404).json({ error: 'Acceso no encontrado' });
    }

    res.json(log);
  } catch (error) {
    console.error('Error al obtener acceso:', error);
    res.status(500).json({ error: 'Error interno al obtener acceso' });
  }
};

// POST /rfid-access → Asignar tarjeta a suscripción
const assignRFIDToSubscription = async (req, res) => {
  const { rfid_code, subscription_id } = req.body;

  if (!rfid_code || !subscription_id) {
    return res.status(400).json({ error: 'rfid_code y subscription_id son requeridos' });
  }

  try {
    const subscription = await prisma.subscriptions.findUnique({
      where: { id: Number(subscription_id) },
    });

    if (!subscription || subscription.state !== 'aprobado') {
      return res.status(400).json({ error: 'Suscripción no válida o no aprobada' });
    }

    const exists = await prisma.rfid_access.findFirst({ where: { rfid_code } });
    if (exists) {
      return res.status(409).json({ error: 'Este código RFID ya está asignado' });
    }

    const rfid = await prisma.rfid_access.create({
      data: {
        rfid_code,
        subscription_id: subscription.id
      }
    });

    res.status(201).json({ message: 'Tarjeta RFID registrada correctamente', rfid });
  } catch (error) {
    console.error('Error al asignar RFID:', error);
    res.status(500).json({ error: 'Error interno al asignar la tarjeta' });
  }
};

// PUT /rfid-access/:subscription_id
const updateRFIDForSubscription = async (req, res) => {
  const { subscription_id } = req.params;
  const { rfid_code } = req.body;

  if (!rfid_code) {
    return res.status(400).json({ error: 'rfid_code es requerido' });
  }

  try {
    const subscription = await prisma.subscriptions.findUnique({
      where: { id: Number(subscription_id) },
    });

    if (!subscription || subscription.state !== 'aprobado') {
      return res.status(400).json({ error: 'Suscripción no válida o no aprobada' });
    }

    const existingAccess = await prisma.rfid_access.findFirst({
      where: { subscription_id: Number(subscription_id) }
    });

    const rfidInUse = await prisma.rfid_access.findFirst({
      where: { rfid_code, subscription_id: { not: Number(subscription_id) } }
    });

    if (rfidInUse) {
      return res.status(409).json({ error: 'Este código RFID ya está asignado a otra suscripción' });
    }

    const updated = existingAccess
      ? await prisma.rfid_access.update({
          where: { id: existingAccess.id },
          data: { rfid_code }
        })
      : await prisma.rfid_access.create({
          data: {
            rfid_code,
            subscription_id: Number(subscription_id)
          }
        });

    res.json({ message: 'Tarjeta RFID vinculada correctamente', rfid: updated });
  } catch (error) {
    console.error('Error al vincular RFID:', error);
    res.status(500).json({ error: 'Error interno al vincular la tarjeta' });
  }
};

module.exports = {
  registerAccess,
  registerExit,
  getAllAccesses,
  getAccessById,
  assignRFIDToSubscription,
  updateRFIDForSubscription
};

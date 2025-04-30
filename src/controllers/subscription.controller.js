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

//Admin ve solicitudes pendientes
const getPendingSubscriptions = async (req, res) => {
    try {
      const subscriptions = await prisma.subscriptions.findMany({
        where: { state: 'pendiente' },
        include: {
          user: true,
          membership: true
        }
      });
  
      res.json(subscriptions);
    } catch (error) {
      console.error('Error al obtener suscripciones pendientes:', error);
      res.status(500).json({ error: 'Error interno al obtener solicitudes pendientes' });
    }
  };
  
  const approveSubscription = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updated = await prisma.subscriptions.update({
        where: { id: Number(id) },
        data: { state: 'aprobado' }
      });
  
      res.json({ message: 'Suscripción aprobada', subscription: updated });
    } catch (error) {
      console.error('Error al aprobar suscripción:', error);
      res.status(500).json({ error: 'Error interno al aprobar la suscripción' });
    }
  };

  const rejectSubscription = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updated = await prisma.subscriptions.update({
        where: { id: Number(id) },
        data: { state: 'rechazado' }
      });
  
      res.json({ message: 'Suscripción rechazada', subscription: updated });
    } catch (error) {
      console.error('Error al rechazar suscripción:', error);
      res.status(500).json({ error: 'Error interno al rechazar la suscripción' });
    }
  };  

  module.exports = {
    requestSubscription,
    getPendingSubscriptions,
    approveSubscription,
    rejectSubscription
  };  

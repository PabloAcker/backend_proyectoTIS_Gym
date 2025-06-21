const express = require('express');
const router = express.Router();
const {
  requestSubscription,
  getPendingSubscriptions,
  approveSubscription,
  rejectSubscription,
  getSubscriptionByUser,
  getAllSubscriptions,
  updateSubscriptionDates,
  getLatestSubscriptionByUser,
  getUserSubscriptionHistory
} = require('../controllers/subscription.controller');

// Solicitud de membresía
router.post('/', requestSubscription);

// Ver solicitudes pendientes
router.get('/pending', getPendingSubscriptions);

router.get('/user/:userId', getSubscriptionByUser);

// Todas las suscripciones
router.get('/', getAllSubscriptions);
// todas las suscripciones por usuario
router.get('/history/:userId', getUserSubscriptionHistory);
// La ultima suscripción por usuario
router.get('/latest/:userId', getLatestSubscriptionByUser);

// Aprobar / Rechazar
router.put('/:id/approve', approveSubscription);
router.put('/:id/reject', rejectSubscription);

// Actualizar fechas de suscripción
router.put('/:id/update-dates', updateSubscriptionDates);

module.exports = router;
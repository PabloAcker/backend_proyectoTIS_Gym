const express = require('express');
const router = express.Router();
const {
  requestSubscription,
  getPendingSubscriptions,
  approveSubscription,
  rejectSubscription,
  getSubscriptionByUser
} = require('../controllers/subscription.controller');

// Solicitud de membresía
router.post('/', requestSubscription);

// Ver solicitudes pendientes
router.get('/pending', getPendingSubscriptions);

router.get('/user/:userId', getSubscriptionByUser);

// Aprobar / Rechazar
router.put('/:id/approve', approveSubscription);
router.put('/:id/reject', rejectSubscription);

module.exports = router;
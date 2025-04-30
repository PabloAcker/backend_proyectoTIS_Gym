const express = require('express');
const router = express.Router();
const {
  requestSubscription,
  getPendingSubscriptions,
  approveSubscription,
  rejectSubscription
} = require('../controllers/subscription.controller');

// Solicitud de membresía
router.post('/', requestSubscription);

// Ver solicitudes pendientes
router.get('/pending', getPendingSubscriptions);

// Aprobar / Rechazar
router.put('/:id/approve', approveSubscription);
router.put('/:id/reject', rejectSubscription);

module.exports = router;
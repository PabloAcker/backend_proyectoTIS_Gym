const express = require('express');
const router = express.Router();
const {
  registerAccess,
  assignRFIDToSubscription,
  registerExit,
  getAllAccesses,
  getAccessById,
  updateRFIDForSubscription
} = require('../controllers/access.controller');

// Registrar entrada por RFID
router.post('/', registerAccess);

// Registrar nueva tarjeta RFID
router.post('/rfid-access', assignRFIDToSubscription);

// 🔄 Actualizar/reescribir tarjeta RFID
router.put('/rfid-access/:subscription_id', updateRFIDForSubscription);

// Registrar salida
router.put('/:id/exit', registerExit);

// Obtener todos los accesos
router.get('/', getAllAccesses);

// ❗ ESTA VA AL FINAL para evitar colisión
router.get('/:id', getAccessById);

module.exports = router;

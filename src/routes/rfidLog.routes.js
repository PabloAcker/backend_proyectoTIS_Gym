const express = require('express');
const router = express.Router();
const {
  getAllRfidLogs,
  createRfidLog,
  updateRfidLog,
  deleteRfidLog
} = require('../controllers/rfidLog.controller');

// Endpoints
router.get('/', getAllRfidLogs);
router.post('/', createRfidLog);
router.put('/:id', updateRfidLog);
router.delete('/:id', deleteRfidLog);

module.exports = router;

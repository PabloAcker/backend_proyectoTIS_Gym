const express = require('express');
const router = express.Router();
const {
  createClient,
  getAllClients
} = require('../controllers/client.controller');

router.post('/', createClient);
router.get('/', getAllClients);

module.exports = router;
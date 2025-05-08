const express = require('express');
const router = express.Router();
const {
  createClient,
  getAllClients,
  updateClient
} = require('../controllers/client.controller');

router.post('/', createClient);
router.get('/', getAllClients);
router.put("/:id", updateClient);

module.exports = router;
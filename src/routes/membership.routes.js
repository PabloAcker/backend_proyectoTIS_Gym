const express = require('express');
const router = express.Router();
const { createMembership, getAllMemberships } = require('../controllers/membership.controller');

// Crear planes
router.post('/', createMembership);

// Listar todos los planes disponibles
router.get('/', getAllMemberships);

module.exports = router;

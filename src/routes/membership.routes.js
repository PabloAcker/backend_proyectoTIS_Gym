const express = require('express');
const router = express.Router();
const { createMembership, getAllMemberships, deleteMembership } = require('../controllers/membership.controller');

// Crear planes
router.post('/', createMembership);

// Listar todos los planes disponibles
router.get('/', getAllMemberships);

//Eliminar algun plan con user_id null
router.delete('/:id', deleteMembership);

module.exports = router;


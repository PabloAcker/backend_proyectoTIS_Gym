const express = require('express');
const router = express.Router();
const { createMembership, getAllMemberships, deleteMembership, getMembershipById } = require('../controllers/membership.controller');

// Crear planes
router.post('/', createMembership);

// Listar todos los planes disponibles
router.get('/', getAllMemberships);

//Eliminar algun plan con user_id null
router.delete('/:id', deleteMembership);

router.get('/:id', getMembershipById);

module.exports = router;


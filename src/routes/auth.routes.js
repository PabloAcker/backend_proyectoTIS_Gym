const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');
const validateToken = require('../middlewares/validateToken');

router.post('/login', login);

// Nueva ruta: validar token
router.get('/validate', validateToken, (req, res) => {
  res.json({ user: req.user }); // Devuelve { id, role } extraídos del token
});

module.exports = router;

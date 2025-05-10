const express = require('express');
const router = express.Router();
const { createQr, getAllQrs } = require('../controllers/qr.controller');

router.post('/', createQr);
router.get('/', getAllQrs);

module.exports = router;

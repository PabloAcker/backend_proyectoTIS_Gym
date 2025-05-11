const express = require('express');
const router = express.Router();
const { createQr, getLatestQr } = require('../controllers/qr.controller');

router.post('/', createQr);
router.get('/', getLatestQr);

module.exports = router;

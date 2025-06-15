const express = require("express");
const router = express.Router();
const { generarDieta } = require("../controllers/chatbot.controller");

router.post("/", generarDieta);

module.exports = router;
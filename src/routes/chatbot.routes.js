const express = require("express");
const router = express.Router();
const { generarIA } = require("../controllers/chatbot.controller");

router.post("/", generarIA);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getUserNotifications } = require("../controllers/notifications.controller");

router.get("/:userId", getUserNotifications);

module.exports = router;

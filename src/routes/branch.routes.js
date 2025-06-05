const express = require('express');
const router = express.Router();
const { getAllBranches, createBranch } = require('../controllers/branch.controller');

router.get('/', getAllBranches);
router.post('/', createBranch);

module.exports = router;

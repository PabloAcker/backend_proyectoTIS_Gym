const express = require('express');
const router = express.Router();
const {
  getAllBranches,
  createBranch,
  updateBranch,
  deleteBranch
} = require('../controllers/branch.controller');

router.get('/', getAllBranches);           // GET /branches
router.post('/', createBranch);            // POST /branches
router.put('/:id', updateBranch);          // PUT /branches/:id
router.delete('/:id', deleteBranch);       // DELETE /branches/:id

module.exports = router;

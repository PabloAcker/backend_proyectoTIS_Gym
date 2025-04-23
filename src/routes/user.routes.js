const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsersRaw,
    restoreUser
  } = require('../controllers/user.controller');


router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/all', getAllUsersRaw);
router.put('/:id/restore', restoreUser);

module.exports = router;
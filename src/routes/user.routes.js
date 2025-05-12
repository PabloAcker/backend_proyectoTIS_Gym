const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsersRaw,
    restoreUser,
    getEmployees
  } = require('../controllers/user.controller');


router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/employees', getEmployees);
router.get('/all', getAllUsersRaw);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/restore', restoreUser);

module.exports = router;
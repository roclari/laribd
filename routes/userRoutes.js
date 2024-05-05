const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const users = require('../models/users');

router.get('/all', userController.getAllUsers);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);

module.exports = router;
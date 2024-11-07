const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAll); 
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.post('/login', userController.login)

module.exports = router;

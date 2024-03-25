const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/users/allUsers', userController.getAllUsers);
router.get('/users/userById/:id', userController.getUserById);
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);
router.post('/users/logout', userController.logout);

module.exports = router;
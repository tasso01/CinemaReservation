const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/users/allUsers', userController.getAllUsers);
router.get('/users/userById/:id', userController.getUserById);
router.post('/authentication/register', userController.register);
router.post('/authentication/login', userController.login);
router.post('/authentication/logout', userController.logout);

module.exports = router;
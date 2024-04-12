const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/users/allUsers', userController.getAllUsers);
router.get('/users/userById/:id', userController.getUserById);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.post('/user/logout', userController.logout);

module.exports = router;
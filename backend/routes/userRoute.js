const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/api/users/allUsers', userController.getAllUsers);
router.get('/api/users/userById/:id', userController.getUserById);
router.post('/api/users/register', userController.register);
router.post('/api/users/login', userController.login);
router.post('/api/users/logout', userController.logout);

module.exports = router;
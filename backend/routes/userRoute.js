const router = require('express').Router();
const userController = require('../controller/userController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/users/allUsers', userController.getAllUsers);
router.get('/users/userById', authenticateToken, userController.getUserById);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.get('/users/profile', authenticateToken, userController.getProfile);

module.exports = router;
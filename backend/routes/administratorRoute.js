const router = require('express').Router();
const administratorController = require('../controller/administratorController');

router.get('/api/administrators/allAdministrators', administratorController.getAllAdministrators);
router.get('/api/administrators/administratorById/:id', administratorController.getAdministratorById);
router.post('/api/administrators/register', administratorController.register);
router.post('/api/administrators/login', administratorController.login);
router.post('/api/administrators/logout', administratorController.logout);

module.exports = router;
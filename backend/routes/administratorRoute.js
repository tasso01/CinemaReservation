const router = require('express').Router();
const administratorController = require('../controller/administratorController');

router.get('/administrators/allAdministrators', administratorController.getAllAdministrators);
router.get('/administrators/administratorById/:id', administratorController.getAdministratorById);
router.post('/administrators/register', administratorController.register);
router.post('/administrators/login', administratorController.login);
router.post('/administrators/logout', administratorController.logout);

module.exports = router;
const router = require('express').Router();
const hallController = require('../controller/hallController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/halls/allHalls', hallController.getAllHall);
router.post('/halls/addHall', authenticateToken, hallController.addHall);
router.delete('/halls/removeHall/:id', authenticateToken, hallController.removeHall);

module.exports = router;
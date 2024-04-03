const router = require('express').Router();
const hallController = require('../controller/hallController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/halls/allHalls', hallController.getAllHall);
router.get('/halls/hallById/:id', hallController.getHallById);
router.get('/halls/hallByNumber/:number', hallController.getHallByNumber);
router.post('/halls/addHall', authenticateToken, hallController.addHall);
router.put('/halls/updateHall/:id', authenticateToken, hallController.updateHall);
router.delete('/halls/removeHall/:id', authenticateToken, hallController.removeHall);

module.exports = router;
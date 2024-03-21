const router = require('express').Router();
const hallController = require('../controller/hallController');

router.get('/halls/allHalls', hallController.getAllHall);
router.get('/halls/hallById/:id', hallController.getHallById);
router.get('/halls/hallByNumber/:number', hallController.getHallByNumber);
router.post('/halls/addHall', hallController.addHall);
router.put('/halls/updateHall/:id', hallController.updateHall);
router.delete('/halls/removeHall/:id', hallController.removeHall);

module.exports = router;

const router = require('express').Router();
const hallController = require('../controller/hallController');

router.get('/api/halls/allHalls', hallController.getAllHall);
router.get('/api/halls/hallById/:id', hallController.getHallById);
router.get('/api/halls/hallByNumber/:number', hallController.getHallByNumber);
router.post('/api/halls/addHall', hallController.addHall);
router.put('/api/halls/updateHall/:id', hallController.updateHall);
router.delete('/api/halls/removeHall/:id', hallController.removeHall);

module.exports = router;

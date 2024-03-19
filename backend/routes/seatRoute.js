const router = require('express').Router();
const seatController = require('../controller/seatController');

router.get('/seats/allSeats', seatController.getAllSeats);
router.get('/seats/seatById/:id', seatController.getSeatById);
router.get('/seats/seatsByHall/:hall', seatController.getSeatByHall);
router.post('/seats/addSeat', seatController.addSeat);
router.put('/seats/updateSeat/:id', seatController.updateSeat);
router.delete('/seats/removeSeat/:id', seatController.removeSeat);

module.exports = router;
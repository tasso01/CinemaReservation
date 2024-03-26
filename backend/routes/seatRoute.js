const router = require('express').Router();
const seatController = require('../controller/seatController');

router.get('/api/seats/allSeats', seatController.getAllSeats);
router.get('/api/seats/seatById/:id', seatController.getSeatById);
router.get('/api/seats/seatsByHall/:hall', seatController.getSeatByHall);
router.post('/api/seats/addSeat', seatController.addSeat);
router.put('/api/seats/updateSeat/:id', seatController.updateSeat);
router.delete('/api/seats/removeSeat/:id', seatController.removeSeat);

module.exports = router;
const router = require('express').Router();
const seatController = require('../controller/seatController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/seats/allSeats', seatController.getAllSeats);
router.get('/seats/seatById/:id', seatController.getSeatById);
router.get('/seats/seatsByHall/:hall', seatController.getSeatByHall);
router.post('/seats/addSeat', authenticateToken, seatController.addSeat);
router.put('/seats/updateSeat/:id', authenticateToken, seatController.updateSeat);
router.delete('/seats/removeSeat/:id', authenticateToken, seatController.removeSeat);

module.exports = router;
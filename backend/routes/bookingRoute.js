const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/bookings/bookingsByUser', authenticateToken, bookingController.getBookingsByUser);
router.post('/bookings/addBooking', authenticateToken, bookingController.addBooking);
router.delete('/bookings/removeBooking/:id', authenticateToken, bookingController.removeBooking);

module.exports = router;
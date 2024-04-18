const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/bookings/allBookings', bookingController.getAllBookings);
router.get('/bookings/bookingById/:id', bookingController.getBookingById);
router.get('/bookings/bookingsByUser', authenticateToken, bookingController.getBookingsByUser);
router.get('/bookings/bookingsByShow/:show', bookingController.getBookingsByShow);
router.post('/bookings/addBooking', authenticateToken, bookingController.addBooking);
router.put('/bookings/updateBooking/:id', authenticateToken, bookingController.updateBooking);
router.delete('/bookings/removeBooking/:id', authenticateToken, bookingController.removeBooking);

module.exports = router;
const router = require('express').Router();
const bookingController = require('../controller/bookingController');

router.get('/bookings/allBookings', bookingController.getAllBookings);
router.get('/bookings/bookingById/:id', bookingController.getBookingById);
router.get('/bookings/bookingsByUser/:user', bookingController.getBookingsByUser);
router.get('/bookings/bookingsByShow/:show', bookingController.getBookingsByShow);
router.post('/bookings/addBooking', bookingController.addBooking);
router.put('/bookings/updateBooking/:id', bookingController.updateBooking);
router.delete('/bookings/removeBooking/:id', bookingController.removeBooking);

module.exports = router;
const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const mid = require('../middleware/mid');

router.get('/bookings/allBookings', bookingController.getAllBookings);
router.get('/bookings/bookingById/:id', bookingController.getBookingById);
router.get('/bookings/bookingsByUser/:user', bookingController.getBookingsByUser);
router.get('/bookings/bookingsByShow/:show', bookingController.getBookingsByShow);
router.post('/bookings/addBooking', mid.checkAuth, bookingController.addBooking);
router.put('/bookings/updateBooking/:id', mid.checkAuth, bookingController.updateBooking);
router.delete('/bookings/removeBooking/:id', mid.checkAuth, bookingController.removeBooking);

module.exports = router;
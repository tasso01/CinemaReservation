const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const mid = require('../middleware/mid');

router.get('/api/bookings/allBookings', middl, bookingController.getAllBookings);
router.get('/api/bookings/bookingById/:id', bookingController.getBookingById);
router.get('/api/bookings/bookingsByUser/:user', bookingController.getBookingsByUser);
router.get('/api/bookings/bookingsByShow/:show', bookingController.getBookingsByShow);
router.post('/api/bookings/addBooking', mid.checkAuth, bookingController.addBooking);
router.put('/api/bookings/updateBooking/:id', mid.checkAuth, bookingController.updateBooking);
router.delete('/api/bookings/removeBooking/:id', mid.checkAuth, bookingController.removeBooking);

module.exports = router;
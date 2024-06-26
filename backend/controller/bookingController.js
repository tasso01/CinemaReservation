const Booking = require('../models/booking');
const userController = require('../controller/userController');
const Show = require('../models/show');

exports.getBookingsByUser = async (req, res) => {
    try {
        const booking = await Booking.findAll({ where: { userId: req.user.id } });
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({ error: 'Error returning booking' });
    }
}

exports.addBooking = async (req, res) => {
    const { seats, showId } = req.body;
    try {
        const userId = req.user.id;
        const show = await Show.findByPk(showId);
        if (seats > show.freeSeats)
            return res.status(500).send({ message: 'Seats not available' });
        show.freeSeats = show.freeSeats - seats;
        await show.save();
        const price = show.price * seats;
        const booking = await Booking.create({ seats, price, userId, showId });
        await booking.save();
        return res.status(200).send({ message: 'Booking created' });
    } catch (error) {
        return res.status(500).send({ message: 'Error creating booking' });
    }
}

exports.removeBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        const reqUserId = await req.user.id;
        if (reqUserId !== booking.userId)
            return res.status(401).send({ message: 'Non authorized operation' });
        const show = await Show.findByPk(booking.showId);
        show.freeSeats = show.freeSeats + booking.seats;
        await show.save();
        await booking.destroy();
        return res.status(200).send({ message: 'Booking deleted' });
    } catch (error) {
        return res.status(500).send({ message: 'Error deleting booking' });
    }
}
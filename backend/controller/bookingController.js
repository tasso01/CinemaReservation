const Booking = require('../models/booking');

exports.getAllBookings = async (req, res) => {
    try {
        const allBooking = await Booking.findAll();
        return res.status(200).json(allBooking);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving bookings", status: 500});
    }
}

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

exports.getBookingsByUser = async (req, res) => {
    try {
        const booking = await Booking.findAll({where: {userId: req.params.user}});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

exports.getBookingsByShow = async (req, res) => {
    try {
        const booking = await Booking.findAll({where: {showId: req.params.show}});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

exports.addBooking = async (req, res) => {
    const {userId, showId, seatId} = req.body;
    try {
        const booking = await Booking.create({userId, showId, seatId});
        await booking.save();
        return res.status(200).send({message: 'Booking created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating booking', status: 500});
    }
}

exports.updateBooking = async (req, res) => {
    const {seatId} = req.body;
    try {
        const booking = await Booking.findByPk(req.params.id);
        booking.seatId = seatId;
        await booking.save();
        return res.status(200).send({message: 'Booking updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating booking', status: 500});
    }
}

exports.removeBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        await booking.destroy();
        return res.status(200).send({message: 'Booking deleted', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting booking', status: 500});
    }
}
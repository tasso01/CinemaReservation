const Booking = require('../models/booking');
const userController = require('../controller/userController');

exports.getAllBookings = async (req, res) => {
    try {
        const allBooking = await Booking.findAll();
        return res.status(200).json(allBooking);
    } catch (error) {
        return res.status(500).send({message: "Error returning bookings"});
    }
}

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({message: 'Error returning booking'});
    }
}

exports.getBookingsByUser = async (req, res) => {
    try {
        const booking = await Booking.findAll({where: {userId: req.params.user}});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error returning booking'});
    }
}

exports.getBookingsByShow = async (req, res) => {
    try {
        const booking = await Booking.findAll({where: {showId: req.params.show}});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error returning booking'});
    }
}

exports.addBooking = async (req, res) => {
    const {showId, seatId} = req.body;
    try {
        const userId = await userController.getIdByUsername(req.user.username);
        const booking = await Booking.create({userId, showId, seatId});
        await booking.save();
        return res.status(200).send({message: 'Booking created'});
    } catch (error) {
        return res.status(500).send({message: 'Error creating booking'});
    }
}

exports.updateBooking = async (req, res) => {
    const {seatId} = req.body;
    try {
        const booking = await Booking.findByPk(req.params.id);
        const reqUserId = await userController.getIdByUsername(req.user.username);
        if (reqUserId !== booking.userId)
            return res.status(401).send({message: 'Non authorized operation'});
        booking.seatId = seatId;
        await booking.save();
        return res.status(200).send({message: 'Booking updated'});
    } catch (error) {
        return res.status(500).send({message: 'Error updating booking'});
    }
}

exports.removeBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        const reqUserId = await userController.getIdByUsername(req.user.username);
        if (reqUserId !== booking.userId)
            return res.status(401).send({message: 'Non authorized operation'});
        await booking.destroy();
        return res.status(200).send({message: 'Booking deleted'});
    } catch (error) {
        return res.status(500).send({message: 'Error deleting booking'});
    }
}
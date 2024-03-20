const Booking = require('../models/booking');

//getAllBookings()
exports.getAllBookings = async (req, res) => {
    try {
        const allBooking = await Booking.findAll();
        return res.status(200).json(allBooking);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving bookings", status: 500});
    }
}

//getBookingById()
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking == null)
            return res.status(404).send({message: 'Booking not found', status: 404});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

//getBookingsByUser()
exports.getBookingByUser = async (req, res) => {
    try {
        const booking = await Booking.findOne(req.params.UserId);
        if (booking == null)
            return res.status(404).send({message: 'Booking not found', status: 404});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

//getBookingsByShow()
exports.getBookingByShow = async (req, res) => {
    try {
        const booking = await Booking.findOne(req.params.ShowId);
        if (booking == null)
            return res.status(404).send({message: 'Booking not found', status: 404});
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Booking', status: 500});
    }
}

//addBooking()
exports.addBooking = async (req, res) => {
    const {UserId, ShowId, SeatId} = req.body;
    try {
        const booking = await Booking.create({UserId, ShowId, SeatId});
        await booking.save();
        return res.status(200).send({message: 'Booking created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating booking', status: 500});
    }
}

//updateBooking()
exports.updateBooking = async (req, res) => {
    const {UserId, ShowId, SeatId} = req.body;
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking == null)
            return res.status(404).send({message: 'Booking not found', status: 404});
        booking.UserId = UserId;
        booking.ShowId = ShowId;
        booking.SeatId = SeatId;
        await booking.save();
        return res.status(200).send({message: 'Booking updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating booking', status: 500});
    }
}

//deleteBooking()
exports.removeBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking == null)
            return res.status(404).send({message: 'Booking not found', status: 404});
        await booking.destroy();
    } catch (error) {
        return res.status(500).send({error: 'Error deleting booking', status: 500});
    }
}
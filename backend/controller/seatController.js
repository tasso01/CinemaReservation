const Seat = require('../models/seat')

exports.getAllSeats = async (req, res) => {
    try {
        const allSeat = await Seat.findAll();
        return res.status(200).json(allSeat);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving seats", status: 500});
    }
}

exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving seat', status: 500});
    }
}

exports.getSeatByHall = async (req, res) => {
    try {
        const seat = await Seat.findOne({where: {hall: req.params.hall}});
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving seat', status: 500});
    }
}

exports.addSeat = async (req, res) => {
    const {number, status, hallId} = req.body;
    try {
        const seat = await Seat.create({number, status, hallId});
        await seat.save();
        return res.status(200).send({message: 'Seat created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating seat', status: 500});
    }
}

exports.updateSeat = async (req, res) => {
    const {number, status, HallId} = req.body;
    try {
        const seat = await Seat.findByPk(req.params.id);
        seat.number = number;
        seat.status = status;
        seat.HallId = HallId;
        await seat.save();
        return res.status(200).send({message: 'Seat updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating seat', status: 500});
    }
}

exports.removeSeat = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        await seat.destroy();
        return res.status(200).send({message: 'Seat deleted', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting seat', status: 500});
    }
}
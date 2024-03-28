const Seat = require('../models/seat')
const User = require('../models/user');

exports.getAllSeats = async (req, res) => {
    try {
        const allSeat = await Seat.findAll();
        return res.status(200).json(allSeat);
    } catch (error) {
        return res.status(500).send({message: "Error retrieving seats"});
    }
}

exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({message: 'Error retrieving seat'});
    }
}

exports.getSeatByHall = async (req, res) => {
    try {
        const seat = await Seat.findAll({where: {hallId: req.params.hall}});
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({message: 'Error retrieving seat'});
    }
}

exports.addSeat = async (req, res) => {
    const {number, status, hallId} = req.body;
    try {
        const user = await User.findOne({where: {username: req.user.username}});
        if (!user.isAdmin)
            return res.status(401).send({message: 'User not authorized'})
        const seat = await Seat.create({number, status, hallId});
        await seat.save();
        return res.status(200).send({message: 'Seat created'});
    } catch (error) {
        return res.status(500).send({message: 'Error creating seat'});
    }
}

exports.updateSeat = async (req, res) => {
    const {number, status, HallId} = req.body;
    try {
        const user = await User.findOne({where: {username: req.user.username}});
        if (!user.isAdmin)
            return res.status(401).send({message: 'User not authorized'})
        const seat = await Seat.findByPk(req.params.id);
        seat.number = number;
        seat.status = status;
        seat.HallId = HallId;
        await seat.save();
        return res.status(200).send({message: 'Seat updated'});
    } catch (error) {
        return res.status(500).send({message: 'Error updating seat'});
    }
}

exports.removeSeat = async (req, res) => {
    try {
        const user = await User.findOne({where: {username: req.user.username}});
        if (!user.isAdmin)
            return res.status(401).send({message: 'User not authorized'})
        const seat = await Seat.findByPk(req.params.id);
        await seat.destroy();
        return res.status(200).send({message: 'Seat deleted'});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting seat'});
    }
}
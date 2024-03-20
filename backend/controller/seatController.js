const Seat = require('../models/seat')

//getAllSeats()
exports.getAllSeat = async (req, res) => {
    try {
        const allSeat = await Seat.findAll();
        return res.status(200).json(allSeat);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving seats", status: 500});
    }
}


//getSeatById()
exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (seat == null)
            return res.status(404).send({message: 'Seat not found', status: 404});
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving seat', status: 500});
    }
}

//getSeatByHall()
exports.getSeatByHall = async (req, res) => {
    try {
        const seat = await Seat.findOne({where: {HallId: req.params.HallId}});
        if (seat == null)
            return res.status(404).send({message: 'Seat not found', status: 404});
        return res.status(200).json(seat);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving seat', status: 500});
    }
}

//addSeat()
exports.addSeat = async (req, res) => {
    const {number, status, HallId} = req.body;
    try {
        const seat = await Seat.create({number, status, HallId});
        await seat.save();
        return res.status(200).send({message: 'Seat created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating seat', status: 500});
    }
}

//updateSeat()
exports.updateSeat = async (req, res) => {
    const {number, status, HallId} = req.body;
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (seat == null)
            return res.status(404).send({message: 'Seat not found', status: 404});
        seat.number = number;
        seat.status = status;
        seat.HallId = HallId;
        await seat.save();
        return res.status(200).send({message: 'Seat updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating seat', status: 500});
    }
}

//deleteSeat()
exports.removeSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (seat == null)
            return res.status(404).send({message: 'Seat not found', status: 404});
        await seat.destroy();
    } catch (error) {
        return res.status(500).send({error: 'Error deleting seat', status: 500});
    }
}
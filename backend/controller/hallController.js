const Hall = require('../models/hall');

//getAllHall()
exports.getAllHall = async (req, res) => {
    try {
        const allHall = await Hall.findAll();
        return res.status(200).json(allHall);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving Halls", status: 500});
    }
}

//getHallById()
exports.getHallById = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        if (hall == null)
            return res.status(404).send({message: 'Hall not found', status: 404});
        return res.status(200).json(hall);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving Hall', status: 500});
    }
}

//getHallByNumber()
exports.getHallByNumber = async (req, res) => {
    try {
        const hall = await Hall.findOne({where: {number: req.params.number}});
        if (hall == null)
            return res.status(404).send({message: 'Hall not found', status: 404});
        return res.status(200).json(hall);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving hall', status: 500});
    }
}

//addHall()
exports.addHall = async (req, res) => {
    const {number, capacity} = req.body;
    try {
        const hall = await Hall.create({number, capacity});
        await hall.save();
        return res.status(200).send({message: 'Hall created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating hall', status: 500});
    }
}

//updateHall()
exports.updateHall = async (req, res) => {
    const {number, capacity} = req.body;
    try {
        const hall = await Hall.findByPk(req.params.id);
        if (hall == null)
            return res.status(404).send({message: 'Hall not found', status: 404});
        hall.number = number;
        hall.capacity = capacity;
        await hall.save();
        return res.status(200).send({message: 'Hall updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating hall', status: 500});
    }
}

//deleteHall()
exports.removeHallById = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        if (hall == null)
            return res.status(404).send({message: 'Hall not found', status: 404});
        await hall.destroy();
    } catch (error) {
        return res.status(500).send({error: 'Error deleting hall', status: 500});
    }
}
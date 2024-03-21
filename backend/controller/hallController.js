const Hall = require('../models/hall');

exports.getAllHall = async (req, res) => {
    try {
        const allHall = await Hall.findAll();
        return res.status(200).json(allHall);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving halls", status: 500});
    }
}

exports.getHallById = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        return res.status(200).json(hall);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving hall', status: 500});
    }
}

exports.getHallByNumber = async (req, res) => {
    try {
        const hall = await Hall.findOne({where: {number: req.params.number}});
        return res.status(200).json(hall);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving hall', status: 500});
    }
}

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

exports.updateHall = async (req, res) => {
    const {number, capacity} = req.body;
    try {
        const hall = await Hall.findByPk(req.params.id);
        hall.number = number;
        hall.capacity = capacity;
        await hall.save();
        return res.status(200).send({message: 'Hall updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating hall', status: 500});
    }
}

exports.removeHall = async (req, res) => {
    try {
        const hall = await Hall.findByPk(req.params.id);
        await hall.destroy();
        return res.status(200).send({message: 'Hall deleted', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting hall', status: 500});
    }
}
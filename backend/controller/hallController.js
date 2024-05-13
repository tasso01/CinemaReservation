const Hall = require('../models/hall');
const User = require('../models/user');

exports.getAllHall = async (req, res) => {
    try {
        const allHall = await Hall.findAll();
        return res.status(200).json(allHall);
    } catch (error) {
        return res.status(500).send({ message: "Error retrieving halls" });
    }
}

exports.addHall = async (req, res) => {
    const { number, capacity } = req.body;
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const hall = await Hall.create({ number, capacity });
        await hall.save();
        return res.status(200).send({ message: 'Hall created' });
    } catch (error) {
        return res.status(500).send({ message: 'Error creating hall' });
    }
}

exports.removeHall = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const hall = await Hall.findByPk(req.params.id);
        await hall.destroy();
        return res.status(200).send({ message: 'Hall deleted' });
    } catch (error) {
        return res.status(500).send({ message: 'Error deleting hall' });
    }
}
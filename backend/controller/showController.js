const Show = require('../models/show')
const User = require('../models/user')
const Hall = require('../models/hall')

exports.getAllShows = async (req, res) => {
    try {
        const allShow = await Show.findAll();
        return res.status(200).json(allShow);
    } catch (error) {
        return res.status(500).send({ message: "Error returning shows" });
    }
}

exports.addShow = async (req, res) => {
    const { date, price, hallId, filmId } = req.body;
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const freeSeats = await getFreeSeats(hallId);
        console.log(freeSeats);
        const show = await Show.create({ date, price, freeSeats, hallId, filmId });
        await show.save();
        return res.status(200).send({ message: 'Show created' });
    } catch (error) {
        return res.status(500).send({ message: 'Error creating show' });
    }
}

exports.removeShow = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const film = await Show.findByPk(req.params.id);
        await film.destroy();
        return res.status(200).send({ message: 'Show deleted', status: 200 });
    } catch (error) {
        return res.status(500).send({ error: 'Error deleting show', status: 500 });
    }
}

async function getFreeSeats(hallId) {
    const hall = await Hall.findByPk(hallId);
    return hall.capacity;
}
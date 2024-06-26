const Film = require('../models/film');
const User = require('../models/user');

exports.getAllFilms = async (req, res) => {
    try {
        const allFilms = await Film.findAll();
        return res.status(200).json(allFilms);
    } catch (error) {
        return res.status(500).send({ message: "Error returning films" });
    }
}

exports.addFilm = async (req, res) => {
    const { title, director, description, duration, image } = req.body;
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const film = await Film.create({ title, director, description, duration, image });
        await film.save();
        return res.status(200).send({ message: 'Film created' });
    } catch (error) {
        return res.status(500).send({ message: 'Error creating film' });
    }
}

exports.removeFilm = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.user.username } });
        if (!user.isAdmin)
            return res.status(401).send({ message: 'User not authorized' })
        const film = await Film.findByPk(req.params.id);
        await film.destroy();
        return res.status(200).send({ message: 'Film deleted' });
    } catch (error) {
        return res.status(500).send({ error: 'Error deleting film' });
    }
}
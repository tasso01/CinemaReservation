const Show = require('../models/show')

exports.getAllShows = async (req, res) => {
    try {
        const allShow = await Show.findAll();
        return res.status(200).json(allShow);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving shows", status: 500});
    }
}

exports.getShowById = async (req, res) => {
    try {
        const show = await Show.findByPk(req.params.id);
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving show', status: 500});
    }
}

exports.getShowsByDate = async (req, res) => {
    try {
        const show = await Show.findAll({where: {date: req.params.date}});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving shows', status: 500});
    }
}

exports.getShowsByHall = async (req, res) => {
    try {
        const show = await Show.findAll({where: {hall: req.params.hall}});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving shows', status: 500});
    }
}


exports.getShowsByFilm = async (req, res) => {
    try {
        const show = await Show.findAll({where: {film: req.params.film}});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving shows', status: 500});
    }
}


exports.addShow = async (req, res) => {
    const {date, price, hallId, filmId} = req.body;
    try {
        const show = await Show.create({date, price, hallId, filmId});
        await show.save();
        return res.status(200).send({message: 'Show created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating show', status: 500});
    }
}

exports.updateShow = async (req, res) => {
    const {date, price, hallId, filmId} = req.body;
    try {
        const show = await Show.findByPk(req.params.id);
        show.date = date;
        show.price = price;
        show.hallId = hallId;
        show.filmId = filmId;
        await show.save();
        return res.status(200).send({message: 'Show updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating show', status: 500});
    }
}

exports.removeShow = async (req, res) => {
    try {
        const film = await Show.findByPk(req.params.id);
        await film.destroy();
        return res.status(200).send({message: 'Show deleted', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting show', status: 500});
    }
}
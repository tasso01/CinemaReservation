const Film = require('../models/film');

exports.getAllFilms = async (req, res) => {
    try {
        const allFilms = await Film.findAll();
        return res.status(200).json(allFilms);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving films", status: 500});
    }
}

exports.getFilmById = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        return res.status(200).json(film);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving film', status: 500});
    }
}

exports.getFilmByTitle = async (req, res) => {
    try {
        const film = await Film.findAll({where: {title: req.params.title}});
        return res.status(200).json(film);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving films', status: 500});
    }
}

exports.getFilmByDirector = async (req, res) => {
    try {
        const film = await Film.findAll({where: {director: req.params.director}});
        return res.status(200).json(film);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving films', status: 500});
    }
}

exports.addFilm = async (req, res) => {
    const {title, director, description, duration} = req.body;
    try {
        const film = await Film.create({title, director, description, duration});
        await film.save();
        return res.status(200).send({message: 'Film created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating film', status: 500});
    }
}

exports.updateFilm = async (req, res) => {
    const {title, director, description, duration} = req.body;
    try {
        const film = await Film.findByPk(req.params.id);
        film.title = title;
        film.director = director;
        film.description = description;
        film.duration = duration;
        await film.save();
        return res.status(200).send({message: 'Film updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating film', status: 500});
    }
}

exports.removeFilm = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        await film.destroy();
        return res.status(200).send({message: 'Film deleted', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error deleting film', status: 500});
    }
}
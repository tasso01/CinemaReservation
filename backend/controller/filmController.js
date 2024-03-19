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
        if (film == null)
            return res.status(404).send({message: 'Film not found', status: 404});
        return res.status(200).json(game);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving film', status: 500});
    }
}

exports.getFilmByTitle = async (req, res) => {
    try {
        const film = await Film.findOne({where: {title: req.params.title}});
        if (film == null)
            return res.status(404).send({message: 'Film not found', status: 404});
        return res.status(200).json(game);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving film', status: 500});
    }
}

exports.getFilmByDirector = async (req, res) => {
    try {
        const film = await Film.findOne({where: {director: req.params.director}});
        if (film == null)
            return res.status(404).send({message: 'Film not found', status: 404});
        return res.status(200).json(game);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving film', status: 500});
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
        if (film == null)
            return res.status(404).send({message: 'Film not found', status: 404});
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

exports.removeFilmById = async (req, res) => {
    try {
        const film = await Film.findByPk(req.params.id);
        if (film == null)
            return res.status(404).send({message: 'Film not found', status: 404});
        await film.destroy();
    } catch (error) {
        return res.status(500).send({error: 'Error deleting film', status: 500});
    }
}
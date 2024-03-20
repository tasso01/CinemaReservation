const Show = require('../models/show')

//getAllShows()
exports.getAllShow = async (req, res) => {
    try {
        const allShow = await Show.findAll();
        return res.status(200).json(allShow);
    } catch (error) {
        return res.status(500).send({error: "Error retrieving shows", status: 500});
    }
}

//getShowById()
exports.getShowById = async (req, res) => {
    try {
        const show = await Show.findByPk(req.params.id);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving show', status: 500});
    }
}

//getShowsByDate()
exports.getShowByDate = async (req, res) => {
    try {
        const show = await Show.findOne(req.params.date);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving show', status: 500});
    }
}

//getShowsByHall()
exports.getShowByHall = async (req, res) => {
    try {
        const show = await Show.findOne(req.params.HallId);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving show', status: 500});
    }
}


//getShowsByFilm()
exports.getShowByFilm = async (req, res) => {
    try {
        const show = await Show.findOne(req.params.FilmId);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        return res.status(200).json(show);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving show', status: 500});
    }
}


//addShow()
exports.addShow = async (req, res) => {
    const {date, price, HallId, FilmId} = req.body;
    try {
        const show = await Show.create({date, price, HallId, FilmId});
        await show.save();
        return res.status(200).send({message: 'Show created', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error creating show', status: 500});
    }
}

//updateShow()
exports.updateShow = async (req, res) => {
    const {date, price, HallId, FilmId} = req.body;
    try {
        const show = await Show.findByPk(req.params.id);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        show.date = date;
        show.price = price;
        show.HallId = HallId;
        show.FilmId = FilmId;
        await show.save();
        return res.status(200).send({message: 'Show updated', status: 200});
    } catch (error) {
        return res.status(500).send({error: 'Error updating show', status: 500});
    }
}

//deleteShow()
exports.removeShowById = async (req, res) => {
    try {
        const show = await Show.findByPk(req.params.id);
        if (show == null)
            return res.status(404).send({message: 'Show not found', status: 404});
        await show.destroy();
    } catch (error) {
        return res.status(500).send({error: 'Error deleting show', status: 500});
    }
}
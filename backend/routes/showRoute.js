const router = require('express').Router();
const showController = require('../controller/showController');

router.get('/api/shows/allShows', showController.getAllShows);
router.get('/api/shows/showById/:id', showController.getShowById);
router.get('/api/shows/showsByDate/:date', showController.getShowsByDate);
router.get('/api/shows/showsByHall/:hall', showController.getShowsByHall);
router.get('/api/shows/showsByFilm/:film', showController.getShowsByFilm);
router.post('/api/shows/addShow', showController.addShow);
router.put('/api/shows/updateShow/:id', showController.updateShow);
router.delete('/api/shows/removeShow/:id', showController.removeShow);

module.exports = router;
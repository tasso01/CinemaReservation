const router = require('express').Router();
const showController = require('../controller/showController');

router.get('/shows/allShows', showController.getAllShows);
router.get('/shows/showById/:id', showController.getShowById);
router.get('/shows/showsByDate/:date', showController.getShowsByDate);
router.get('/shows/showsByHall/:hall', showController.getShowsByHall);
router.get('/shows/showsByFilm/:film', showController.getShowsByFilm);
router.post('/shows/addShow', showController.addShow);
router.put('/shows/updateShow/:id', showController.updateShow);
router.delete('shows/removeShow/:id', showController.removeShow);

module.exports = router;
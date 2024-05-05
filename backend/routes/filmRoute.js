const router = require('express').Router();
const filmController = require('../controller/filmController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/films/allFilms', filmController.getAllFilms);
router.post('/films/addFilm', authenticateToken, filmController.addFilm);
router.delete('/films/removeFilm/:id', authenticateToken, filmController.removeFilm);

module.exports = router;
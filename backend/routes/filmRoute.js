const router = require('express').Router();
const filmController = require('../controller/filmController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/films/allFilms', filmController.getAllFilms);
router.get('/films/filmById/:id', filmController.getFilmById);
router.get('/films/filmByTitle/:title', filmController.getFilmByTitle);
router.get('/films/filmByDirector/:director', filmController.getFilmByDirector);
router.post('/films/addFilm', authenticateToken, filmController.addFilm);
router.put('/films/updateFilm/:id', authenticateToken, filmController.updateFilm);
router.delete('/films/removeFilm/:id', authenticateToken, filmController.removeFilm);

module.exports = router;
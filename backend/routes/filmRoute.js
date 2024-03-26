const router = require('express').Router();
const filmController = require('../controller/filmController');

router.get('/api/films/allFilms', filmController.getAllFilms);
router.get('/api/films/filmById/:id', filmController.getFilmById);
router.get('/api/films/filmByTitle/:title', filmController.getFilmByTitle);
router.get('/api/films/filmByDirector/:director', filmController.getFilmByDirector);
router.post('/api/films/addFilm', filmController.addFilm);
router.put('/api/films/updateFilm/:id', filmController.updateFilm);
router.delete('/api/films/removeFilm/:id', filmController.removeFilm);

module.exports = router;
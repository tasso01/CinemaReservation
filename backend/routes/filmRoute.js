const router = require('express').Router();
const filmController = require('../controller/filmController');

router.get('/films/allFilms', filmController.getAllFilms);
router.get('/films/filmById/:id', filmController.getFilmById);
router.get('/films/filmByTitle/:title', filmController.getFilmByTitle);
router.get('/films/filmByDirector/:director', filmController.getFilmByDirector);
router.post('/films/addFilm', filmController.addFilm);
router.put('/films/updateFilm/:id', filmController.updateFilm);
router.delete('/films/deleteFilmById/:id', filmController.deleteFilmById);

module.exports = router;
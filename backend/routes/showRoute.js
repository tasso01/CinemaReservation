const router = require('express').Router();
const showController = require('../controller/showController');
const { authenticateToken } = require('../authentication/jwt');

router.get('/shows/allShows', showController.getAllShows);
router.post('/shows/addShow', authenticateToken, showController.addShow);
router.delete('/shows/removeShow/:id', authenticateToken, showController.removeShow);

module.exports = router;
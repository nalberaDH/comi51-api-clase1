const express = require('express');
const {listAll, findMovieById, addNewMovie, modify} = require('../controllers/moviesController');

const router = express.Router();

router.get('/movies', listAll);
router.get('/movies/:id',findMovieById);

router.post('/new-movie',addNewMovie);
router.put('/modify-movie',modify)
module.exports = router;
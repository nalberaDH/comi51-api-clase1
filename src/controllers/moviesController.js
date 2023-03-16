const db = require('../database/models');

const Movies = db.Movie;

const listAll = (req,res) => {
    Movies.findAll({
        include:['genre']
    }).then((movies) => res.status(200).json({
        total: movies.length,
        status:'OK',
        data: movies
    }))
}

const findMovieById = (req,res)=>{
    const {id} = req.params;

    Movies.findByPk(
        id,
        {
            include:['genre']
        }
    ).then((movie) => res.status(200).json({
        total: movie.length,
        status:'OK',
        data: movie
    }))
}

const addNewMovie = (req,res) => {
    const newMovie = {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length:req.body.length,
        genre_id: req.body.genre_id
    }
    Movies.create(newMovie)
    .then(()=>res.status(200)
    .json(newMovie)).catch((error) => res.sen(error));
}

const modify = (req,res) => {
    //const {id} = req.body;
    const movieId = req.body.id;
    Movies.update(
        {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length:req.body.length,
            genre_id: req.body.genre_id
        },
        {
            where: {id: parseInt(movieId)}
        }
    ).then((movie) => res.status(200).json(req.body))
}
module.exports = {
    listAll,
    findMovieById,
    addNewMovie,
    modify
}
const { getAll, create, getOne, remove, update, moviesActors, moviesDirectors, moviesGenres } = require('../controllers/movies.controllers');
const express = require('express');

const routerMovies = express.Router();

routerMovies.route('/')
    .get(getAll)
    .post(create);

routerMovies.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerMovies.route('/:id/genres')
    .post(moviesGenres)

routerMovies.route('/:id/actors')
    .post(moviesActors)

routerMovies.route('/:id/directors')
    .post(moviesDirectors)

module.exports = routerMovies;
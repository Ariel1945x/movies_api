const express = require('express');
const router = express.Router();
const routerGenres = require('./genres.router')
const routerActors = require('./actors.router')
const routerDirectors = require('./directors.router')
const routerMovies = require('./movies.router')

// colocar las rutas aquí
router.use("/genres", routerGenres )
router.use("/actors", routerActors)
router.use("/directors", routerDirectors)
router.use("/movies", routerMovies)

module.exports = router;
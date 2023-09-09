
const Movies = require("./Movie")
const Genres = require("./Genre")
const Actors = require("./Actor")
const Directors = require("./Director")

Movies.belongsToMany(Genres, { through: "moviesGenres" })
Genres.belongsToMany(Movies, { through: "moviesGenres" })

Movies.belongsToMany(Actors, { through: "moviesActors" })
Actors.belongsToMany(Movies, { through: "moviesActors" })

Movies.belongsToMany(Directors, { through: "moviesDirectors" })
Directors.belongsToMany(Movies, { through: "moviesDirectors" })
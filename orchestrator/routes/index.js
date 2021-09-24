const express = require("express");
const router = express.Router();
const genre = require("./genreRoutes");
const movies = require("./movieRoute");

module.exports = router.use("/api/genres/", genre);
module.exports = router.use("/api/movies/", movies);

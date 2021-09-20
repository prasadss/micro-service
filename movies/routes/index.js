const express = require("express");
const router = express.Router();
const movies = require("./moviesRoutes");

module.exports = router.use("/api/movies/", movies);

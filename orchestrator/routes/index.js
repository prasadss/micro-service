const express = require("express");
const router = express.Router();
const genre = require("./genreRoutes");

module.exports = router.use("/api/genres/", genre);

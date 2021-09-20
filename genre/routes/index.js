const express = require("express");
const router = express.Router();
const genere = require("./genreRoutes");

module.exports = router.use("/api/genres/", genere);

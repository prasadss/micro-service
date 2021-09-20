const express = require("express");
const winston = require("winston");
const app = express();
require("./startup/db")();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => winston.info(`Listening Port ${PORT}`));
module.exports = server;

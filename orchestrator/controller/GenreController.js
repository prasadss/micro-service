const genre_service = require("../service/genre.service");
const baseResponse = require("../helper/baseResponse");
function index(req, res) {
  genre_service.index().then((data) => {
    res.send(baseResponse(data));
  });
}

function show(req, res) {
  genre_service.show(req.params.id).then((data) => {
    res.send(baseResponse(data));
  });
}

function insert(req, res) {
  genre_service.insert(req.body).then((data) => {
    res.send(baseResponse(data));
  });
}

function remove(req, res) {
  genre_service.remove(req.params.id).then((data) => {
    res.send(baseResponse(data));
  });
}

function update(req, res) {
  genre_service.update(req.params.id, req.body).then((data) => {
    res.send(baseResponse(data));
  });
}
module.exports = { index, show, insert, remove, update };

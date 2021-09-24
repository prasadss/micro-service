const movie_service = require("../service/movies.service");
const genre_service = require("../service/genre.service");
const baseResponse = require("../helper/baseResponse");
function index(req, res) {
  movie_service.index().then((data) => {
    res.send(baseResponse(data));
  });
}

function show(req, res) {
  movie_service.show(req.params.id).then((data) => {
    res.send(baseResponse(data));
  });
}

async function insert(req, res) {
  let { body } = req;
  let genre_res = await genre_service.show(body.genere_id);
  if (genre_res.error)
    return res.send(baseResponse({ error: "Invalid Genre Id" }));
  movie_service.insert(req.body).then((data) => {
    res.send(baseResponse(data));
  });
}

function remove(req, res) {
  movie_service.remove(req.params.id).then((data) => {
    res.send(baseResponse(data));
  });
}

async function update(req, res) {
  let genre_res = await genre_service.show(body.genere_id);
  if (genre_res.error)
    return res.send(baseResponse({ error: "Invalid Genre Id" }));
  movie_service.update(req.params.id, req.body).then((data) => {
    res.send(baseResponse(data));
  });
}
module.exports = { index, show, insert, remove, update };

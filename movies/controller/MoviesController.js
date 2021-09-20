const { Movies, validateMovies } = require("../models/Movies");
async function index(req, res) {
  const result = await Movies.find().sort("name");

  res.send(result);
}

async function show(req, res) {
  const movies = await Movies.findById(req.params.id);

  if (!movies) return res.status(400).send("This genre doesnt exist");

  res.send(movies);
}

async function insert(req, res) {
  const { error } = validateMovies(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let movies = new Movies({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    release_date: req.body.release_date,
    genere_id: req.body.genere_id,
    duration: req.body.duration,
  });

  const result = await movies.save();
  res.send(result);
}

async function remove(req, res) {
  const movies = await Movies.findByIdAndRemove(req.params.id);

  if (!movies) return res.status(400).send("This genre doesnt exist");

  res.send(movies);
}

async function update(req, res) {
  const { error } = validateMovies(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const movies = await Movies.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  );

  if (!movies) return res.status(400).send("This genre doesnt exist");

  res.send(movies);
}
module.exports = { index, show, insert, remove, update };

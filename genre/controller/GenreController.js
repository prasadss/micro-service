const { Genre, validateGenre } = require("../models/Genre");
async function index(req, res) {
  const result = await Genre.find().sort("name");

  res.send(result);
}

async function show(req, res) {
  const genre = await Genre.findById(req.params.id);

  if (!genre)
    return res.status(400).send({ message: "This genre doesnt exist" });

  res.send(genre);
}

async function insert(req, res) {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  let genre = new Genre({
    name: req.body.name,
    description: req.body.description,
  });

  const result = await genre.save();
  res.send(result);
}

async function remove(req, res) {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre)
    return res.status(400).send({ message: "This genre doesnt exist" });

  res.send(genre);
}

async function update(req, res) {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  );

  if (!genre)
    return res
      .status(400)
      .send({ message: { message: "This genre doesnt exist" } });

  res.send(genre);
}
module.exports = { index, show, insert, remove, update };

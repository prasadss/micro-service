const mongoose = require("mongoose");
const Joi = require("joi");
const MoviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  release_date: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  genere_id: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  duration: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  rating: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
});
function validateMovies(movies) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
    release_date: Joi.string().min(5).required(),
    genere_id: Joi.string().min(5).required(),
    duration: Joi.number().required(),
    rating: Joi.number().required(),
  });
  return schema.validate(movies);
}
module.exports.MoviesSchema = MoviesSchema;
module.exports.Movies = mongoose.model("Movies", MoviesSchema);
module.exports.validateMovies = validateMovies;

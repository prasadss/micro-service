const mongoose = require("mongoose");
const Joi = require("joi");
const GenreSchema = new mongoose.Schema({
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
});
function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
  });
  return schema.validate(genre);
}
module.exports.GenreSchema = GenreSchema;
module.exports.Genre = mongoose.model("Genre", GenreSchema);
module.exports.validateGenre = validateGenre;

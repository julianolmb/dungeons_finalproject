const mongoose = require('mongoose');

const recipessSchema = mongoose.Schema({
  entry: Date,
  name: String,
  level: String,
  race: String,
  class: String,
  skills: String,
  duration: Number,
  effect: String,
  authors: [{ type: String}],
  introduction: String,
  recipe: String,
  method: String
})

module.exports.Recipes = mongoose.model('recipes', recipessSchema,'recipes')


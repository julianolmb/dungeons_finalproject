const mongoose = require('mongoose');

const talesSchema = mongoose.Schema({
  entry: Date,
  series: String,
  title: String,
  subtitle: String,
  content: String,
  authors: [{ type: String}],
})

module.exports.Tales = mongoose.model('tales', talesSchema,'tales')
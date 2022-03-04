const mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
  entry: Date,
  quote: String,
  author: String
})

module.exports.Quotes = mongoose.model('quotes', quotesSchema,'quotes')
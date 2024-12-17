const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tSchecma = new Schema({
  username: { type: String, require: true },
  tweet: { type: String, require: true },
});

module.exports = mongoose.model('Tweet', tSchecma);

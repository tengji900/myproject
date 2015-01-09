'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PeopleSchema = new Schema({
  name: String,
  age: Number,
  sex: Boolean//男：0；女：1
});

module.exports = mongoose.model('PeopleBean', PeopleSchema);
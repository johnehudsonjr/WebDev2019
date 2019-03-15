// models/User.js
const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
//Schema is a class. All classes begin in uppercase.

// initialize the schema with a configuration object

const TodoItemSchema = new Schema({
    title: String,
    coffeeLevel:  Number,
      completed: Boolean,
      date: Date
});
  

  module.exports = mongoose.model("TodoItem", TodoItemSchema);
// db/connection.js
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/todo").then(() => {
  console.log("MONGODB is now connected")
})

module.exports = mongoose;
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create our Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// we define our database's structure (schema) and name here
module.exports = Item = mongoose.model('item', ItemSchema)
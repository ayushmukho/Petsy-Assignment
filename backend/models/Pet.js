const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

  price: {
    type: String,
  },
})

module.exports = mongoose.model('Pet', petSchema)

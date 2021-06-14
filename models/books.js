const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  own: Boolean,
  collectedBy: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, {
  timestamps:true
})

module.exports = mongoose.model("Book", bookSchema)
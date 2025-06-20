const mongoose = require('mongoose');

//1. first of all create Schema
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  actor: { type: Schema.Types.ObjectId, ref: 'Actor' },
  content: String
  
});



//2. Associate it with a model
module.exports=mongoose.model('Blog',blogSchema);
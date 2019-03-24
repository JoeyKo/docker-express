const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ImageSchema = new Schema({
  width: { 
    type: Number, 
    required: [true, 'why no width?']
  },
  height: { 
    type: Number, 
    required: [true, 'why no height?']
  },
  filename: { 
    type: String, 
    unique: true,
    required: [true, 'why no filename?']
  },
  src: { 
    type: String, 
    unique: true,
    required: [true, 'why no src?']
  },
});

module.exports = mongoose.model('Image', ImageSchema);
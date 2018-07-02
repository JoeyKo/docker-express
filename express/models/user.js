const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'why no email?']
  },
  password: {
    type: String,
    required: [true, 'why no password?']
  },
});

module.exports = mongoose.model('User', UserSchema);


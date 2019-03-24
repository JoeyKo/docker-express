const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BearSchema = new Schema({
  name: { 
    type: String, 
    unique: true,
    required: [true, 'why no name?']
  },
  age: { 
    type: Number, 
    min: [18, 'Too young'], 
    max: 65, 
    required: [true, 'why no age?']
  },
  living: { type: Boolean, default: false },
});

BearSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I dont't have a name";
  console.log(greeting);
}

module.exports = mongoose.model('Bear', BearSchema);
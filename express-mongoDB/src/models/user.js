const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  surname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  takenBooks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
    default: [],
  },
});

module.exports = mongoose.model('user', userSchema);

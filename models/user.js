const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  // avatar: {
  //   type: String,
  //   required: true,
  //   default: ''
  // },
  messages: {
    type: Array,
    required: true,
    default: []
  }

},
{timestamps: true});

module.exports = mongoose.model('User', UserSchema);

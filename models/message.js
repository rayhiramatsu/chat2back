const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

  text: {
    type: String
  }
},
{timestamps: true});

//   conversation_id: {
//     type: String
//   },
//   user_id: {
//     type: String,
//     required: true,
//     default: ''
//   },
//   sender: {
//     type: String,
//     required: true
//   },
//   text: {
//     type: String,
//     required: true,
//     default: ''
//   },
//   edited: {
//     type: Boolean,
//     required: true,
//     default: false
//   }
// },
// {timestamps: true});

module.exports = mongoose.model('message', MessageSchema);

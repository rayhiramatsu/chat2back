const express = require('express');
const router = express.Router();

const Message = require('../models/message.js')

//---------- Routes ----------//

// Index
router.get('/', (req, res) => {
  Message.find({}, (err, allMessages) => {
    res.json(allMessages)
  })
})

// Create
router.post('/', (req, res) => {
  Message.create(req.body, (err, newMessage) => {
    res.json(newMessage)
  })
})

// Edit
router.put('/:id', (req, res) => {
  Message.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMessage) => {
    res.json(updatedMessage)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  Message.findByIdAndRemove(req.params.id, (err, deletedMessage) => {
    res.json(deletedMessage)
  })
})





module.exports = router

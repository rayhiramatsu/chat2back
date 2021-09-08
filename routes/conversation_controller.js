const express = require('express');
const router = express.Router();

const Conversation = require('../models/conversation.js')

//---------- Routes ----------//

//new conversation

router.post('/', async (req, res)=>{
  const newConvo = new Conversation({
    members: [req.body.senderId, req.body.receiverId]
  });
});

//get conversation of a  user

router.get('/', (req, res)=>{

})

module.exports = router;

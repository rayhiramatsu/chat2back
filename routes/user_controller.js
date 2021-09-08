const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('../models/user.js');

//---------- Routes ----------//

// Index
router.get('/', (req, res) => {
    User.find({}, (err, allUsers) => {
        res.json(allUsers)
    })
})

// Create
router.post('/', (req, res) => {
    // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, newUser) => {
        res.json(newUser)
    })
})

// Show
// To search if a user already exists, might be unused
router.get('/:id', (req, res)=>{
    router.findById(req.params.id, (err, foundUser)=>{
        res.json(foundUser);
    });
});

// Edit
// To update password?
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        res.json(updatedUser)
    })
})

// Delete
router.delete('/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id, (err, deletedUser)=>{
        res.json(deletedUser)
    })
})

module.exports = router

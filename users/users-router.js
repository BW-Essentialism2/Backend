const express = require('express');//server

const router = express.Router();//for routes

const Users = require('./users-model.js');

router.get('/', (req,res) => {
    Users.find()
        .then(users => {
            console.log("users in get of users router", users)
            res.status(201).json(users)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


module.exports = router;
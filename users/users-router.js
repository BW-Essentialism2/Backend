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


router.get('/:id', (req,res) => {
    const {id} = req.params;
    Users.findById(id)
        .then(user => {
            console.log(`Hi!, ${user.firstname}!`)
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
})


router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    Users.remove(id)
        .then(user => {
            console.log(`${user} deleted`)
            res.status(201).json(`${user} user deleted`)
        })
        .catch(error => {
            res.status(400).json({message: `${error}; oops. user not deleted`})
        })
})


module.exports = router;
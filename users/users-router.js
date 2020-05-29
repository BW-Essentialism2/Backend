const express = require('express');//server

const router = express.Router();//for routes

const Users = require('./users-model.js');

//CRUD OPS for user router
// i should be able to add a user, get a user, edit a user and delete a user
//user is added when they register so a post wont be here
router.get('/', (req,res) => {
    Users.find()
        .then(users => {
            // console.log("users in get of users router", users)
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
            // console.log(`Hi!, ${user.firstname}!`)
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
            // console.log(`${user} deleted`)
            res.status(201).json(`${user} user deleted`)
        })
        .catch(error => {
            res.status(400).json({message: `${error}; oops. user not deleted`})
        })
})

router.put('/:id', (req,res) => {
    const {id} = req.body;
    Users.findById(id)
        .then(users => {
            // console.log('users in put: ', users)
            if(users === null){
                res.status(400).json("user doesn't exist")
            }else{
                Users.update(users.id, req.body)
                    .then(updatedUser => {
                        res.status(201).json(updatedUser)
                    })
                    .catch(error => {
                        res.status(500).json(error)
                    })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


module.exports = router;
const express = require('express');//server

const router = express.Router();//for routes

const Values = require('./values-model.js');


router.post('/', (req,res) => {
    const value = req.body;
        Values.add(value)
            .then(value => {
                console.log("value: ", value)
                res.status(201).json({message: "value added is ", value})
            })
            .catch(error => {
                res.status(500).json({message: error.message})
            })
})

router.get('/', (req,res) => {
    Values.find()
        .then(values => {
            console.log("Values in get of Values router", values)
            res.status(201).json(values)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


router.get('/:id', (req,res) => {
    const {id} = req.params;
    Values.findById(id)
        .then(value => {
            console.log(value)
            res.status(200).json(value)
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
})


router.delete('/:id', (req,res) =>{
    const {id} = req.params;
    Values.remove(id)
        .then(value => {
            console.log(value)
            res.status(201).json(`${vaule} user deleted`)
        })
        .catch(error => {
            res.status(400).json({message: `${error}; oops. user not deleted`})
        })
})


module.exports = router;
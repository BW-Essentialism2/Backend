const express = require('express');//server
const Users = require('./users-model.js');//model
const router = express.Router();//for routes
const {isValid} = require('./isValid.js');//checks to see if "user" has username & pass
const bcrypt = require('bcryptjs');//hashes password

router.post('/register', (req,res) => {//add user w/hashed password to db
    const user = req.body;
    if(isValid(user)){
        const hash = bcrypt.hashSync(user.password, 8);
        user.password = hash;
        Users.add(user)
            .then(user => {
                console.log("user: ", user)
                res.status(201).send(user)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    }else{
        res.status(400).json({ message: "couldnt register user; add username and password" });
    }
})

module.exports = router;
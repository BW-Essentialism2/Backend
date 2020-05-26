const express = require('express');//server
const Users = require('../users/users-model.js');//model
const router = express.Router();//for routes
const {isValid} = require('../users/isValid.js');//checks to see if "user" has username & pass
const bcrypt = require('bcryptjs');//hashes password
const jwt = require('jsonwebtoken');

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

router.post('/login', (req,res) => {
    const {username, password} = req.body;
    if(isValid(req.body)){
        Users.findBy({username})
          .then(([user])=>{
            // console.log("user: ",user)
            if(user && bcrypt.compareSync(password, user.password)){
              const token = generateToken(user);
              res.status(200).json({ username: user.username, token });
            }else{
              res.status(401).json({errorMessage: "Invalid Credentials"});
            }
          })
          .catch((err) => {
            res.status(500).json({ errorMessage: "there was an error",error:err.message });
          });
      }else{
        res.status(400).json({ errorMessage: "Please provide username, password" });
      }
})

function generateToken(user) {
    const payload = {
      user: user.username,
    };
    const options = {
      expiresIn: "1h",
    };
    const secret = 'very secret secret';
    return jwt.sign(payload, secret,options);
  }

module.exports = router;
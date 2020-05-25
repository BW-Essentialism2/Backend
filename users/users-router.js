const express = require('express');
const Users = require('./users-model.js');
const router = express.Router();
const {isValid} = require('./isValid.js');

router.post('/register', (req,res) => {
    
    Users.add
})

module.exports = router;
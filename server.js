const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json())
//router imports
const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const valuesRouter = require('./values/values-router.js');
// const authenticator = require('./auth/authenticate-middleware.js');

server.get('/helloWorld', (req,res) => {
    res.status(200).json({message: "hello world test"});
})

//auth "router"
server.use('/api/auth', authRouter);
//user routes
server.use('/api/users', usersRouter);  
//value routes
server.use('/api/values', valuesRouter);

module.exports = server;
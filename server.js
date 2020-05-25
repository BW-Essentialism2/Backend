const express = require('express');
const server = express();
server.use(express.json())
//router import
const usersRouter = require('./users/users-router.js');

//users' "router"
server.use('/api/auth', usersRouter);

module.exports = server;
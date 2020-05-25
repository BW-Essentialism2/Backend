const express = require('express');
const server = express();
server.use(express.json())
//router import
const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const authenticator = require('./auth/authenticate-middleware.js');

//auth "router"
server.use('/api/auth', authRouter);
//user routes
server.use('/api/users', authenticator, usersRouter);  

module.exports = server;
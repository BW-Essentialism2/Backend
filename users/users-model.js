
const db = require('../database/connection.js');

module.exports = {
    add,
}

function add(user){
    return db('users').insert(user);
}
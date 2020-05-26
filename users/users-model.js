
const db = require('../database/connection.js');

module.exports = {
    add,
    findBy,
    find,
}

function add(user){
    return db('users').insert(user, "*")
        .then(([users]) => users)
}

function findBy(filter){
    return db('users')
        .where(filter)
}

function find(){
    return db('users')
}
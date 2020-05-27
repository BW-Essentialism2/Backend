
const db = require('../database/connection.js');

module.exports = {
    add,
    findBy,
    find,
    remove,
    findById,
}

function add(value){
    return db('values').insert(value, "*")
        .then(([value]) => value)
}

function findBy(filter){
    return db('users')
        .where(filter)
}

function find(){
    return db('values')
}

function remove(id) {
    return db('values').where('id', id).del();
}

function findById(id){
    return db('values').where('id', id).first();
}
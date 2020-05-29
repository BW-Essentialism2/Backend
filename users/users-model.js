
const db = require('../database/connection.js');

module.exports = {
    add,
    findBy,
    find,
    remove,
    findById,
    update,
    
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

function remove(id) {
    return db('users').where('id', id).del();
}

function findById(id){
    return db('users').where('id', id).first();
}

function update(id, changes) {
    return db('users')
      .where('id', id)
      .update(changes)
      .then((count) => (count > 0 ? get(id) : null));
  }


  
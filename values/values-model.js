
const db = require('../database/connection.js');

module.exports = {
    add,
    findBy,
    find,
    remove,
    findById,
    getUserValues,
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

function getUserValues(userID){
    return db('users')           
        .join('user_values', 'users.id', '=', 'user_values.user_id')
        .join('values', 'user_values.value_id', '=', 'values.id')
        .select('users.firstname', 'values.name')
}


// return db('tasks')
// .join('projects', 'tasks.project_id', '=', 'projects.id').where('tasks.project_id', id)
// .select('tasks.description as task_description', 'projects.name as project_name', 'projects.description as projects_description')

// select firstname, name from users
// join user_values on users.id = user_values.user_id
// join values on user_values.value_id = values.id
// where users.id = 1;

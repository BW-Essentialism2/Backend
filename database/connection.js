const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config[process.env.DB_ENV || 'development']);

// export for use in codebase
module.exports = db;
// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || 'postgresql://postgres@localhost/essentialism';
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/essentialism.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    seeds: {
      directory: "./database/seeds"
    },
    migrations: {
      directory: "./database/migrations"
    }, 
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: "./database/seeds"
    },
    migrations: {
      directory: "./database/migrations"
    },
  }

};

exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users.string('firstname');
        users.string('lastname');
        users.string('email')
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
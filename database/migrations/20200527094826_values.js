exports.up = function(knex) {
  return knex.schema
    .createTable('values', values => {
      values.increments();
      values.string('name').unique().notNullable();
      values.boolean('is_set_to').defaultTo(false);
    })

    .createTable('user_values', uv =>{
      uv.increments().primary();
      uv.integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      uv.integer('value_id')
        .notNullable()
        .unsigned()
        .references('values.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_values')
    .dropTableIfExists('values');
};
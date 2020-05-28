
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_values').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_values').insert([
        {user_id: 1, value_id: 1},
        {user_id: 2, value_id: 2},
        {user_id: 3, value_id: 3},
        {user_id: 1, value_id: 4},
        {user_id: 2, value_id: 5},
        {user_id: 3, value_id: 6}
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {name: "athletic", user_id: 1},
        {name: "art", user_id: 1},
        {name: "creativity", user_id: 1},
        {name: "independence", user_id: 1},
        {name: "kindness", user_id: 1},        
        {name: "living", user_id: 1},
        {name: "membership", user_id: 1},
        {name: "music", user_id: 1},
        {name: "moral", user_id: 1},
        {name: "nature", user_id: 1},
        {name: "community", user_id: 1},
        {name: "relationships", user_id: 1},
        {name: "humor", user_id: 1},
        {name: "success", user_id: 1},
        {name: "other", user_id: 1},
      ]);
    });
};
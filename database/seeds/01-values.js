
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {name: "athletic"},
        {name: "art"},
        {name: "creativity"},
        {name: "independence"},
        {name: "kindness"},        
        {name: "living"},
        {name: "membership"},
        {name: "music"},
        {name: "moral"},
        {name: "nature"},
        {name: "community"},
        {name: "relationships"},
        {name: "humor"},
        {name: "success"},
        {name: "other"},
      ]);
    });
};
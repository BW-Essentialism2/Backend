
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstname: 'brian', lastname: "jffj", email:"test1@aol.com" , password:"pass9" },
        {firstname: 'ben', lastname:"jfjf", email:"test2@aol.com" , password:"pass9" },
        {firstname: 'blanca', lastname: "jfj", email:"test3@aol.com" , password:"pass8" },
        {firstname: 'bret', lastname: "jfjfkfj", email:"test4@aol.com" , password:"pass7" },
        {firstname: 'broz', lastname: "jfjfsjfj", email:"test5@aol.com" , password:"pass1" },
        {firstname: 'beed', lastname: "jfjvfjf", email:"test6@aol.com" , password:"pass5" },
        {firstname: 'borb', lastname: "jfjfxjf", email:"test7@aol.com" , password:"pass4" },
      ]);
    });
};

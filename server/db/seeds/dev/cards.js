
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, value: 'something', category: 'family'},
        {id: 2, value: 'rowValue2', category: 'second'},
        {id: 3, value: 'rowValue3', category: 'family'}
      ]);
    });
};

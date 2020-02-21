exports.up = knex =>
  knex.schema.createTable("cards", tbl => {
    tbl.increments('id');
    tbl.text("value", 128).notNullable();
    tbl.text("category", 128).notNullable();
  });
exports.down = knex => knex.schema.dropTableIfExists("cards");
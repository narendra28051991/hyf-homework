exports.up = function(knex) {
    return knex.schema.createTable("contacts", (table) => {
      table.increments("id").unsigned().primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("email").nullable();
      table.string("phone").nullable();
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("contacts");
};
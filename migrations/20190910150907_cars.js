exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin")
      .unique()
      .notNullable();
    tbl.string("make");
    tbl.string("model");
    tbl.integer("mileage");
    tbl.string("transmission type");
    tbl.string("title status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

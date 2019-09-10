exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "5f8e6uu7y1ty2fgf4",
          make: "ford",
          model: "fusion",
          mileage: "54777",
          transmission_type: null,
          title_status: null
        },
        {
          vin: "5fg4euu7y1ty2fgf4",
          make: "chevy",
          model: "impala",
          mileage: "98774",
          transmission_type: null,
          title_status: null
        },
        {
          vin: "5f54547s8ssl55g7j",
          make: "ford",
          model: "explorer",
          mileage: "106782",
          transmission_type: null,
          title_status: null
        }
      ]);
    });
};

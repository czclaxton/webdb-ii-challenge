const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error retrieving cars" });
    });
});

router.post("/", (req, res) => {
  const carInfo = req.body;

  db("cars")
    .insert(carInfo)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(addedCar => {
          res.status(201).json(addedCar);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error creating car entry" });
    });
});

module.exports = router;

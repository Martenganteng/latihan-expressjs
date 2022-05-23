const express = require("express");
const router = express.Router();
const Gear = require("../model/Gear.model");

router.get("/", (req, res) => {
  Gear.getGear(res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Gear.getGearById(id, res);
});

router.post("/update", (req, res) => {
  // Get data dari method post form
  const data = {
    id: req.body.id,
    name: req.body.name,
    deskripsi: req.body.deskripsi,
  };

  Gear.updateGear(data, res);
});

router.post("/add", (req, res) => {
  const data = {
    name: req.body.name,
    deskripsi: req.body.deskripsi,
  };

  Gear.addGear(data, res);
});

router.get("/remove/:id", (req, res) => {
  const id = req.params.id;
  Gear.deleteGear(id, res);
});

module.exports = router;

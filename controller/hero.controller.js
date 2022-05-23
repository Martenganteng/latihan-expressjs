const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

router.get("/", (req, res) => {
  Hero.getHero(res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Hero.getHeroById(id, res);
});

router.post("/update", (req, res) => {
  // Get data dari method post form
  const data = {
    id: req.body.id,
    name: req.body.name,
    role: req.body.role,
    skill: req.body.skill,
    story: req.body.story,
  };

  Hero.updateHero(data, res);
});

router.post("/add", (req, res) => {
  const data = {
    name: req.body.name,
    role: req.body.role,
    skill: req.body.skill,
    story: req.body.story,
  };

  Hero.addHero(data, res);
});

router.get("/remove/:id", (req, res) => {
  const id = req.params.id;
  Hero.deleteHero(id, res);
});

module.exports = router;

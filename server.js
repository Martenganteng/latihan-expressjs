const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const port = 9001;

const heroController = require("./controller/hero.controller");
const gearController = require("./controller/gear.controller");

server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");

server.use("/hero", heroController);
server.use("/gear", gearController);
server.use("/", (req, res) => {
  res.render("home");
});

server.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});

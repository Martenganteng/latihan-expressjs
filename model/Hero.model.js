const db = require("../config");

exports.getHero = (res) => {
  //query data
  const sql = "SELECT * FROM `hero`";

  //execute data
  db.query(sql, (err, result) => {
    if (err) return console.log("err: ", err);

    //res data
    const heroes = {
      title: "List Hero Mobile Legends",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("index", { heroes });
    res.end();
  });
};

exports.getHeroById = (id, res) => {
  //query data
  const sql = `SELECT * FROM hero WHERE id=${id}`;

  db.query(sql, (err, result) => {
    if (err) return console.log("err: ", err);

    //res data
    const hero = {
      title: "DATA HERO BY ID",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("heroDetail", { hero });
    res.end();
  });
};

exports.updateHero = (data, res) => {
  // set data post
  const id = data.id;
  const name = data.name;
  const role = data.role;
  const skill = data.skill;
  const story = data.story;

  // query sql
  const sql = `UPDATE hero SET name='${name}', role='${role}', skill='${skill}', story='${story}' WHERE id='${id}'`;

  // execute sql
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect("/hero");
    res.end();
  });
};

exports.addHero = (data, res) => {
  // set data post
  const nama = data.name;
  const role = data.role;
  const skill = data.skill;
  const story = data.story;

  const sql = `INSERT INTO hero (name, role, skill, story) VALUES ('${nama}', '${role}', '${skill}', '${story}')`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.redirect("/hero");
    res.end();
  });
};

exports.deleteHero = (id, res) => {
  const sql = `DELETE FROM hero WHERE id='${id}'`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.redirect("/hero");
    res.end();
  });
};

exports;

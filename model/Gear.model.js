const db = require("../config");

exports.getGear = (res) => {
  //query data
  const sql = "SELECT * FROM `gear`";

  //execute data
  db.query(sql, (err, result) => {
    if (err) return console.log("err: ", err);

    //res data
    const gears = {
      title: "List Gear Mobile Legends",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("gear", { gears });
    res.end();
  });
};

exports.getGearById = (id, res) => {
  //query data
  const sql = `SELECT * FROM gear WHERE id=${id}`;

  db.query(sql, (err, result) => {
    if (err) return console.log("err: ", err);

    //res data
    const Gear = {
      title: "DATA Gear BY ID",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("GearDetail", { Gear });
    res.end();
  });
};

exports.updateGear = (data, res) => {
  // set data post
  const id = data.id;
  const name = data.name;
  const deskripsi = data.deskripsi;

  // query sql
  const sql = `UPDATE gear SET name='${name}', deskripsi='${deskripsi}' WHERE id='${id}'`;

  // execute sql
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect("/gear");
    res.end();
  });
};

exports.addGear = (data, res) => {
  // set data post
  const nama = data.name;
  const deskripsi = data.deskripsi;

  const sql = `INSERT INTO gear (name, deskripsi) VALUES ('${nama}', '${deskripsi}')`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.redirect("/gear");
    res.end();
  });
};

exports.deleteGear = (id, res) => {
  const sql = `DELETE FROM gear WHERE id='${id}'`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.redirect("/gear");
    res.end();
  });
};

exports;

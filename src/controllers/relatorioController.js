var sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, '../../db/log.db')


exports.get = (req, res, next) => {
  var db   = new sqlite3.Database(dbPath);
  db.all('select * from Relatorio order by datetime asc', (err, row) => {
    res.json(row);
  });
  db.close();
};



exports.getByFilter = (req, res, next) => {
  let params = req.body;
  var db   = new sqlite3.Database(dbPath);

  db.all('select * from Relatorio where datetime >= ? order by datetime asc', [params.start], (err, row) => {
    if (err) {
      return console.log(err.message);
    }
    res.json(row);
  });

  db.close();
};



exports.post = (req, res, next) => {
  var db   = new sqlite3.Database(dbPath);
  let data = req.body;
  db.run('insert into Relatorio (action, description, datetime, input) values (?,?,?,?)', [data.action, data.description, data.datetime, data.input], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  res.status(201).send(data);
  db.close();
};

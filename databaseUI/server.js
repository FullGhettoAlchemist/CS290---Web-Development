var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_quachan',
  password        : '0467',
  database        : 'cs290_quachan'
});

pool.query("DROP TABLE IF EXISTS workouts", function(err) {
   var createString = "CREATE TABLE workouts(" +
   "id INT PRIMARY KEY AUTO_INCREMENT," +
   "name VARCHAR(255) NOT NULL," +
   "rep INT," +
   "weight INT," +
   "units BOOLEAN," +
   "date DATE)";
   pool.query(createString, function(err) {
      if (err) console.log(err);
      console.log("workouts table created");
   });
});

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'form'});
var bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2996);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));
app.use(express.static('assets'));

app.get('/',function(req,res,next){
  // res.sendFile(__dirname + '/views/form.html');
  res.render('form');
});

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){
    var createString = "CREATE TABLE workouts(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "done BOOLEAN," +
    "due DATE)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('main',context);
    })
  });
});

app.get('/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO workouts (`name, reps, weight, date, unit`) VALUES (?, ?, ?, ?, ?)", [req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.unit], function(err, data){
    if(err){
      next(err);
      return;
    }
    context.data = data.insertId;
    res.render('form',context);
  });
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstated.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

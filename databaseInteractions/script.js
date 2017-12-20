var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2992);

app.use(express.static('assets'));

// app.get('/index',function(req,res){
//     var context = {};
//     context.test = 'booya';
//     res.render('index', context);
// });
app.get('/',function(req,res,next){
    var context = {};
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){//replace your connection pool with the your variable containing the connection pool
        if(err){
          next(err);
          return;
        }
        mysql.pool.query(createString, function(err){
          if(err){
            next(err);
    		return;
          }
    });
});
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:1921:' + app.get('port') + '; press Ctrl-C to terminate.');
});

app.get('/index',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO workouts (`name`) VALUES (?)", [req.query.c], function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Inserted id " + result.insertId;
    res.render('home',context);
  });
});

app.get('/index',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.stringify(rows);
    res.render('index', context);
  });
});

app.put('/index', function(req, res) {
   var units = req.query.units === 'kg' ? 0 : 1;
   pool.query('UPDATE workouts SET name=?, rep=?, weight=?, date=?, units=? WHERE id=? ', [req.query.name, req.query.rep, req.query.weight, req.query.date, units, req.query.id], function(err, result) {
      if (err) {
         console.log(err);
         return;
      }
      res.render('form');
   });
});

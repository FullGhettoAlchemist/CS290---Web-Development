var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 1921);

app.get('/',function(req,res){
  res.render('main')
});

app.get('/request',function(req,res){
    var params = [];
    for (var x in req.query){
        params.push({'key':x, 'value':req.query[x]});
    }
    var context = {};
    // var headLabel = {};
    context.dataList = params;
    context.heading = "GET Request Received";
    res.render('request', context);
});

app.post('/request',function(req,res){

    var params = [];
    for (var x in req.body){
        params.push({'key':x, 'value':req.body[x]});
    }
    var context = {};
    context.dataList = params;
    context.heading = "POST Request Received";
    res.render('request', context);
});
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:1921:' + app.get('port') + '; press Ctrl-C to terminate.');
});

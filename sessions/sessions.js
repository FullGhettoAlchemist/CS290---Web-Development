var express = require('express');
var app = express();
var session = require('express-session');
app.use(session({secret:'password'}));
app.get('/count',function(req,res){
  var context = {};
  context.count = req.session.count || 0;
  req.session.count = context.count + 1;
  res.render('counter', context);
});

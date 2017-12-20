var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_quachan',
  password        : '0467',
  database        : 'cs290_quachan'
});

module.exports.pool = pool;

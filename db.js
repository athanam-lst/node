var fs = require('fs');

//Connect Database
var mysql = require('mysql');
// var connection  = mysql.createPool({
var connection  = mysql.createConnection({



  host            : 'localhost',
  user            : 'root',
  password        : '123',
  port            : 3306,
  database        : 'XXXXX_db',



  // ssl: {
  //       ca: fs.readFileSync(__dirname + '/certs/server_ca.crt'),
  //       key: fs.readFileSync(__dirname + '/certs/client.key'),
  //       cert: fs.readFileSync(__dirname + '/certs/client.crt')
  // }
  
});
// console.log(connection.error)
// console.log(connection)
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.message);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// connection.on('connection', function(connection) {
//   util.log('Connected to MySql db');
// });

// connection.on('error', function(err) {
//   util.log('Oh shit.');
//   throw err;
// });


module.exports = connection;


// host            : '10.2.101.20',
//   user            : 'evisa',
//   password        : 'Ev1s@2018',
//   port            : 3030,
//   database        : 'eVisa',
//   ssl: {
//         ca: fs.readFileSync(__dirname + '/certs/server_ca.crt'),
//         key: fs.readFileSync(__dirname + '/certs/client.key'),
//         cert: fs.readFileSync(__dirname + '/certs/client.crt')
//   }


// In local
// host            : 'localhost',
//   user            : 'root',
//   password        : 'root',
//   port            : 3306,
//   database        : 'invoice_evisa',



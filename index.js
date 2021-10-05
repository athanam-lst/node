
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');
var cors = require('cors');
const app = express();
const {NodeSSH} = require('node-ssh')
var SSH = require('simple-ssh');

app.options('*', cors());
app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', '*'); //'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token','token');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
    
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));
app.use(expressSanitizer());

//------------
var ssh = new SSH({
    host: '192.168.46.129',
    user: 'root',
    pass: 'Admin@123'
    // privateKey: '/home/steel/.ssh/id_rsa'
  })

//   ssh.exec('ls -lh', {
//     out: function(stdout) {
//         console.log(stdout);
//     }
// }).start();

//Use Link API
app.use('/api_v1', require('./api.js')); //comment

const server = app.listen(7000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Running ... http://localhost%s', host, port);

    

});


test1()
console.log("--AAA--")
test2()
test3()

function test1() {
    var ssh = new SSH({
        host: '192.168.46.129',
        user: 'root',
        pass: 'Admin@123'
        // privateKey: '/home/steel/.ssh/id_rsa'
      })
      ssh.exec('df -h', {
        out: function(stdout) {
            console.log(stdout+'_192.168.46.129');
        }
    }).exec('date', {
        out: function(stdout) {
            console.log(stdout+'_192.168.46.129');
        }
    }).start();
}

function test2() {
    var ssh = new SSH({
        host: '192.168.1.62',
        user: 'appgateway',
        pass: 'Dev@2020'
        // privateKey: '/home/steel/.ssh/id_rsa'
      })
      ssh.exec('df -h', {
        out: function(stdout) {
            console.log(stdout+'_192.168.1.62');
        }
    }).exec('date', {
        out: function(stdout) {
            console.log(stdout+'_192.168.1.62');
        }
    }).start();
}

function test3() {
    var ssh = new SSH({
        host: '10.88.101.62',
        user: 'root',
        pass: 'goCHA@2019'
        // privateKey: '/home/steel/.ssh/id_rsa'
      })
      ssh.exec('df -h', {
        out: function(stdout) {
            console.log(stdout+'_10.88.101.62');
        }
    }).exec('date', {
        out: function(stdout) {
            console.log(stdout+'_10.88.101.62');
        }
    }).start();
}
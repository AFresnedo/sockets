// require stuff and set up app
var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

// define route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000);

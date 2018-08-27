// require stuff and set up app
var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

// define route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// define socket listeners
// connection and disconnect are built-in understood events
io.on('connection', function(socket) {
  console.log('a new connection has been established');

  socket.on('chat msg', function(msg) {
    // what to do if a 'chat msg' is recieved from a client
    // in this case, tell all other clients about it
    io.emit('chat msg', msg);
  });

  // if any action on disconnect is required, put it here
  socket.on('disconnect', function() {
    console.log('a connection has been lost');
  });
});

http.listen(3000);

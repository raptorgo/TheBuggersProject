var express = require('express')
var app = express()
var path = require('path');
// Creating Node server on port 3000
var server = app.listen(3000)
// Creating Socket.io server
var io = require('socket.io')(server);
// Setting public folder
app.use(express.static('public'))
// We send 'index.html' on localhost:3000/
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
// When a user join the server we send the 'welcome' message
io.on('connection', function (socket) {
    console.log('A user connected');
    io.emit('welcome', { data: 'Un utente si è connesso' });
});
// We send 'Ciao' on /hello
app.get('/hello', function (req, res) {
    res.send("Ciao");
    res.end();
})

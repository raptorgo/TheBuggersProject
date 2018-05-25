var io
var nsp
var start = (server, company) => {
    io = require('socket.io')(server);
    nsp = io.of('/company' + company)
}
var emit = (obj) => {
    nsp.emit('message', {message: obj})
}
/*io.on('connection', (socket) => {
    // Log whenever a user connects
    console.log('user connected');

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on('message', (message) => {
        console.log("Message Received: " + message);
        io.emit('message', { message: 'message' });
    });
});*/
module.exports = {
    start,
    emit
}
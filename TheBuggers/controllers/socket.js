var io
var nsp

var start = (server, company) => {
    io = require('socket.io')(server);

    io.on('connection', function(socket){
        socket.on('room', function(data){
            socket.join(data.room_name);
        }); 
    });

    io.on('connection', function(socket){
        console.log("Joinata company1");
        socket.join('/company' + company);
    });
}
var emit = (obj) => {
    // console.log(io.nsps["/"].adapter.rooms["/company1"].length);
    if(io.nsps["/"].adapter.rooms["/company1"]){
        console.log(io.nsps["/"].adapter.rooms["/company1"])
        io.to('/company1').emit('message', { message: obj})
    }
         
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
const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    socket.on("msg",(msg)=>{
        socket.broadcast.emit("recmsg",msg)
    })
});
// end of socket.io logic

module.exports = socketapi;
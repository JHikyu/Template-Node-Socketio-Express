const socket = io(window.location.origin)

socket.emit('join_room',  [roomCode, userId] )



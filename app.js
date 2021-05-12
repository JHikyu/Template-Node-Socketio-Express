var express = require('express');
const { nextTick } = require('process');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
http.listen(process.env.PORT || 80, function() {
     console.log('listening on *:80');
});


const { v4: uuidv4 } = require('uuid');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   //* Subdomain
   const sub = req.get('host') ? req.get('host').substring(0, req.get('host').lastIndexOf('.')) : null

   //? Create room with new uuid
   const roomCode = uuidv4();
   res.redirect('../' + roomCode);
})


app.get('/:roomCode', function(req, res) {
   //* Subdomain
   const sub = req.get('host') ? req.get('host').substring(0, req.get('host').lastIndexOf('.')) : null


   //? Join room by roomCode
   const roomCode = req.params.roomCode;
   const userId = uuidv4();
   res.render('index', { roomCode: roomCode, userId: userId })
})



let rooms = {}
io.on('connection', socket => {
   console.log('User connected')

   socket.on('join_room', data => {
      const [ roomCode, userId ] = data;

      //? Room exists - join and get information
      if(rooms[roomCode]) {

         //TODO - 
         
      }

      //? Room doesnt exist - create defaults
      else {

         //TODO - 
         rooms[roomCode] = {
            
         }

      }


   })
})

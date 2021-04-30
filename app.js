var express = require('express');
var app = express();
const http = require('http').Server(app);
http.listen(process.env.PORT || 80, function() {
     console.log('listening on *:80');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   // Subdomain
   const sub = req.get('host') ? req.get('host').substring(0, req.get('host').lastIndexOf('.')) : null

   // Your code here

   res.render('index', { ejs: "Some", options: 'declared' })


})

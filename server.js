var express  = require('express');
var app      = express();
var port  	 = 3000;

app.use(express.static(__dirname )); 		// statics
app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

app.listen(port);										// let the games begin!
console.log("Web server listening on port " + port);

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendfile('./index.html');
});

http.listen(9000, function(){
  console.log('listening on *:9000');
});

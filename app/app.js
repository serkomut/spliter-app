var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(5000);

console.log('Running...');

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
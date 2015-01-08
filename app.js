var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(3000);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
	console.log('Running index.html');
});
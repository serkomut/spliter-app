var http = require('http');
var port = process.env.port || 1320;

http.createServer(function(req, res){
	res.writeHead(200, {'Content-TYpe': 'text/plain'});
	res.end('Running...');
}).listen(port);
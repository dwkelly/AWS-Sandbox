/**
Sample app performs basic "Hello World" site.
**/
var http = require('http');

var server = http.createServer(function (req, res){
		res.writeHead(200, {'Content-type': 'text/html'});
		res.end('What up tho?!');
});

server.listen(8080);

console.log("Running over http://locahost:8080");
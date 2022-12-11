var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end('Hello Mahd!');
    res.end();
}).listen(8181);
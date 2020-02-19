var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hi, Nama saya Ivan");
});

server.listen(8011);

console.log("server running on http://localhost:8011");
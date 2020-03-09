var express = require('express');
var app = express();
var mahasiswaController = require('./Controller/MahasiswaController')();
//const http = require("http");
const hostname = 'localhost';
const port = 8011;

// //Create HTTP server and listen on port 8020 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hi World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.get("/", function(request, response){
  response.json({"Message":"Hello"});
});
app.use("/mhs", mahasiswaController);

app.listen(port, function(){
  var message = "Server running on Port: " + port;
  console.log(message);
});
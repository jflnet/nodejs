var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200,{ 'Content-Type': 'Content-Type: application/json; charset=utf-8'});
  req.on('data', function(chunk) {
console.log("Received body data:")
console.log(chunk.toString())})
  res.end('{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}');
});
server.listen(8080);
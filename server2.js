var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("Hello World"+ req.connection.remoteAddress); 
console.log("Connexion : remote IP --> " + req.connection.remoteAddress + "  HTTP --> "+ res.statusCode + " Headers --> " + req.rawHeaders); 

for(var item in res.headers) {
    console.log(item + ": " + req.headers[item]);
  }


 
});

server.listen(80);
console.log("Serveur web http://SES0GN7S.disf.sf.local:80 ...");
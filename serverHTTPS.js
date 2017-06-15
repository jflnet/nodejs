var https = require('https');
const util = require('util')
var fs = require('fs');


var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
  console.log(getDateTime() + "  --> " + req.connection.remoteAddress + " GET "  + req.url +req.headers  );
  //console.log(util.inspect(req.headers, false, null));
}).listen(8000);
console.log(getDateTime() + "  --> Demarrage du server HTTPS  " + a.address().family +"  "+ a.address().address +" port "+a.address().port);


function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
   var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return  day + ":" +month + ":" + year + " - "+ hour + ":" + min + ":" + sec;

}
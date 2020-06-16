var http = require('http');
var date = require('./my-first-module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time are currently: ' + date.myDateTime());
  res.write('<br><br>Hello World!');
  res.end();
}).listen(8080);
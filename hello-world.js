//task 1 "HELLO WORLD"
console.log("HELLO WORLD");
//task 2 "HELLO NODE"
var http = require('http');

var port = 3000;

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, function () {
  console.log('Server running at http://localhost:'+port+" you can try it iheb by typing localhost:3000 in your brave browser and you gonna see the message :)");
});

//task 3 "HELLO FILE"
var fs = require('fs');

fs.readFile('hello.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

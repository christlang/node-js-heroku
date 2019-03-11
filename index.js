const http = require('http');
const process = require('process');

const port = process.argv[2] || 8080;

console.log(`port: ${port}`);

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080

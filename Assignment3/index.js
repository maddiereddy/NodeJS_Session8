//To run: node index.js test.txt
//output.txt will be created

var http = require('http');		// Load the http module to create an http server.
var fs = require('fs-extra'); 					  //file system methods module
var changeCase = require('maddies-to-uppercase'); //module being tested after being 
												  //published to npm
//method from published module	called
//creates an 'output.txt' file containing the uppercase text
changeCase.toUpperCase();				

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  
  //read the output file and display in browser
  fs.readFile("./output.txt", "utf8", function (error, data) {
  	response.write('<html><body><h1>Output</h1></body></html>');
	response.end(data);
  });
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
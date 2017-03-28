// run program using 'node index.js'
var http = require('http'); //Load the http module to create an http server.
var uuid = require('uuid'); //load uuid module to create UUIDS


var word = 'node module';	//word being used for creating the random uuids
let uuidV1 = uuid.v1(word); //version 1
let uuidV4 = uuid.v4(word); //version 4

console.log("UUIDV1: " + uuidV1); //print to console
console.log("UUIDV4: " + uuidV4);

// Configure our HTTP server to respond with the generated UUIDs to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("UUIDs using word `node module`" + "\r\n");	
  response.end("V1 UUID: "+ uuidV1 + "\r\n" + "V4 UUID: " + uuidV4);
});

// Listen on port 8080, IP defaults to localhost
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at localhost:8080");
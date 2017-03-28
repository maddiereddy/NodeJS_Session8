// Load the http module to create an http server.
var http = require('http');
var _ = require('lodash'); //import a module from npm 

const dogs = [
  { 'name': 'Snickers', 'age': 2, 'breed' : 'King Charles'},
  { 'name': 'Prudence', 'age': 5, 'breed' : 'Poodle'},
  { 'name': 'Doodles', 'age': 1, 'breed' : 'Snickedoodle'},
  { 'name': 'Pickles', 'age': 6, 'breed' : 'Pitbull'}
];

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  

  var val = _.find(dogs, function(n){
	if (_.matches({ 'breed': 'Poodle' })(n)){
	  return n;
	};
  });
 
  response.end(val.name + " is a " + val.breed + "!");
});

// Listen on port 8080, IP defaults to localhost
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at localhost:8080");

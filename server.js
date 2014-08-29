var http = require("http");
var port = process.env.PORT || 1337;
function onRequest(request, response) {
	console.log("Request/Peticion Recibida.");
	response.writeHead(200, {"Content-Type": "text/html"});
	
	response.write("<h1>Response...</h1> Yoda NodeJS");
	response.end();
}

http.createServer(onRequest).listen(port);
console.log("Servidor Web Iniciado. Puerto "+port);
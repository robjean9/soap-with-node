"use strict";

var soap = require('soap');
var http = require('http');

var service = {
    ws: {
        calc: {
          Add : function(args) {
                var n = 1*args.intA + 1*args.intA;
                return { AddResult : n };
            },

            multiplicar : function(args) {
                var n = args.a * args.b;
                return { mulres : n };
            }
        }
    }
};

var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');
	if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
		return;
	}
    response.end("404: Not Found: "+request.url);
});

server.listen(process.env.PORT || 8001);
soap.listen(server, '/wscalc1', service, xml);
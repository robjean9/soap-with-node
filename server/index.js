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
    response.end("404: Not Found: "+request.url);
});

server.listen(process.env.PORT || 8001);
soap.listen(server, '/wscalc1', service, xml);
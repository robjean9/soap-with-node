"use strict";

var soap = require('soap');
var http = require('http');
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var service = {
    ws: {
        calc: {
          Add : function(args) {
                var n = 1*args.intA + 1*args.intB;
                return { AddResult : parseFloat(n).toFixed(2) };
            },
            Subtract : function(args) {
                var n = 1*args.intA - 1*args.intB;
                return { SubtractResult :parseFloat(n).toFixed(2) };
            },
            Multiplicacao : function(args) {
              var n = 1*args.intA * 1*args.intB;
              return { MultiplicacaoResult :parseFloat(n).toFixed(2) };
            },
            Divisao : function(args) {
              var n = (1*args.intA) / (1*args.intB);
              return { DivisaoResult :parseFloat(n).toFixed(2) };
            }
        }
    }
};

var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

// var server = http.createServer(function(request,response) {
//   response.setHeader('Access-Control-Allow-Origin', '*');
// 	response.setHeader('Access-Control-Request-Method', '*');
// 	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 	response.setHeader('Access-Control-Allow-Headers', '*');
// 	if ( request.method === 'OPTIONS' ) {
// 		response.writeHead(200);
// 		response.end();
// 		return;
// 	}
//     response.end("404: Not Found: "+request.url);
// });

// server.listen(process.env.PORT || 8001);
// soap.listen(server, '/wscalc1', service, xml);

var app = express();
  //body parser middleware are supported (optional)
  app.use(cors());
  app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
  app.listen(process.env.PORT || 8001, function(){
      //Note: /wsdl route will be handled by soap module
      //and all other routes & middleware will continue to work
      soap.listen(app, '/wscalc1', service, xml, function(){
        console.log('server initialized');
      });
  });
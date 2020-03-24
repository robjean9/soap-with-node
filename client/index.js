var soap = require('soap');
var url = 'http://localhost:8001/wscalc1?wsdl';

soap.createClient(url, function(err, client) {
    if (err) throw err;
    console.log(client.describe().ws.calc);
    client.Subtract({intA: 4,intB: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
    client.Divisao({intA: 4,intB: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
});
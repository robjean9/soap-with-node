var soap = require('soap');
var url = 'https://obscure-plains-72326.herokuapp.com/wscalc1/?wsdl';

soap.createClient(url, function(err, client) {
    if (err) throw err;
    console.log(client.describe().ws.calc);
    client.multiplicar({a: 4,b: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
    client.Add({intA: 4,intB: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
});
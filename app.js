var http = require('http');
var mod3 = require('./mod3.js');// import js module
http.createServer(function(request, response){

response.writeHead(200);


response.write(mod3.balance());
// console.log(mod2.formatMoney(54));
response.end();

}).listen(3000);

const ipaddressapi = require(__dirname+"/index.js");

(async () => {

ipaddressapi.address().then(d => console.log(d))
ipaddressapi.isV4('127.0.0.1').then(d => console.log(d))
ipaddressapi.isV6('::1').then(d => console.log(d))
ipaddressapi.geo('127.0.0.1').then(d => console.log(d))
ipaddressapi.dns('127.0.0.1').then(d => console.log(d))
ipaddressapi.time('127.0.0.1').then(d => console.log(d))
ipaddressapi.currency('127.0.0.1').then(d => console.log(d))
ipaddressapi.whois('8.9.230.8').then(d => console.log(d))

})();

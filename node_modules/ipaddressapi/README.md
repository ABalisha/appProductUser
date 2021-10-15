
<div align="center">
  <br>

# ipaddressapi
<br>
<p>
A node.js NPM package to provide you with IP data
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/ipaddressapi"><img src="https://img.shields.io/npm/v/ipaddressapi.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/ipaddressapi"><img src="https://img.shields.io/npm/dt/ipaddressapi.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/milanmdev/ipaddressapi"><img src="https://img.shields.io/david/milanmdev/ipaddressapi.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/ipaddressapi"><img src="https://api.ghprofile.me/view?username=milanmdev-ipaddressapi&label=repository%20view%20count&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/ipaddressapi/"><img src="https://nodei.co/npm/ipaddressapi.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Usage

## Add the package

To start, you will need to add the package. To do that, simply run `npm i ipaddressapi`. In your code, add the following:

```js
const ipaddressapi = require("ipaddressapi");
```

Now you can use any of the functions below!

* * *

## API Usage
```js
const ipaddressapi = require("ipaddressapi");

ipaddressapi.address().then(d => console.log(d)) // your ip is returned
ipaddressapi.isV4('127.0.0.1').then(d => console.log(d)) // true
ipaddressapi.isV6('::1').then(d => console.log(d)) // true
ipaddressapi.geo('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
ipaddressapi.dns('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
ipaddressapi.time('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
ipaddressapi.currency('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
ipaddressapi.whois('127.0.0.1').then(d => console.log(d)) // null (because IP is localhost)
```

// packages
const fetch = require('node-fetch');
const ippkg = require('ip');
const moment = require('moment-timezone');

module.exports = {

address: function() {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(ippkg.address());
    } catch (err) {
      reject(new Error(err));
    }
  });
},

isV4: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      resolve(ippkg.isV4Format(ipaddress));
    } catch (err) {
      reject(new Error(err));
    }
  });
},

isV6: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      resolve(ippkg.isV6Format(ipaddress));
    } catch (err) {
      reject(new Error(err));
    }
  });
},

whois: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://ipwhois.app/json/${ipaddress}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
},

geo: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://ipwhois.app/json/${ipaddress}`, {method: 'GET'});
      const json = await response.json();
      let fjson = await {continent: json.continent, continent_code: json.continent_code, country: json.country, country_code: json.country_code, country_flag: json.country_flag, country_capital: json.country_capital, country_phone: json.country_phone, country_neighbors: json.country_neighbours, region: json.region, city: json.region, latitude: json.latitude, longitude: json.longitude};
      resolve(fjson);
    } catch (err) {
      reject(new Error(err));
    }
  });
},

dns: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://ipwhois.app/json/${ipaddress}`, {method: 'GET'});
      const json = await response.json();
      let fjson = await {asn: json.asn, org: json.org, isp: json.isp};
      resolve(fjson);
    } catch (err) {
      reject(new Error(err));
    }
  });
},

time: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://ipwhois.app/json/${ipaddress}`, {method: 'GET'});
      const json = await response.json();
      let fjson = await {timezone: json.timezone, timezone_name: json.timezone_name, timezone_dstOffset: json.timezone_dstOffset, timezone_gmtOffset: json.timezone_gmtOffset, timezone_gmt: json.timezone_gmt, current_time: new Date(moment().tz(json.timezone).format("YYYY-MM-DD HH:mm:ss"))};//format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      resolve(fjson);
    } catch (err) {
      reject(new Error(err));
    }
  });
},

currency: function(ipaddress) {
  if (!ipaddress) throw new TypeError('ipaddress must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://ipwhois.app/json/${ipaddress}`, {method: 'GET'});
      const json = await response.json();
      let fjson = await {currency: json.currency, currency_code: json.currency_code, currency_symbol: json.currency_symbol, currency_rates: json.currency_rates, currency_plural: json.currency_plural};
      resolve(fjson);
    } catch (err) {
      reject(new Error(err));
    }
  });
}

}

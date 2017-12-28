const request = require('request');
const IpAddressInfo = require('../models/ipAddressInfo.js');

exports.getIpAddressInfo = (ipAddress, done) => {
    console.log(ipAddress);
    request.get('http://www.freegeoip.net/json/' + ipAddress, (err, result) => {
        if (err) return done(err);

        let ipAddressInfo = new IpAddressInfo(result.body);
        return done(null, ipAddressInfo);
    });
};
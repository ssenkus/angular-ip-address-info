const request = require('request');

exports.getIpAddressInfo = (ipAddress, done) => {
    request.get('http://www.freegeoip.net/json/' + ipAddress, (err, result) => {
        if (err) return done(err);

        return done(null, result);
    });
};
const whois = require('whois');


exports.getWhoIs = (whoisIpAddress, done) => {
    whois.lookup(whoisIpAddress, (err, data) => {
        return done(err, data);
    });
};
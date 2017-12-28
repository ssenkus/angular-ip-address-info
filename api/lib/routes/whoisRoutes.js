const whoisRepo = require('../dataAccess/whoisRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/whois', getWhoisFromIpAddress);
    app.get('/api/:v?/whoisdomain', getWhoisFromDomain);

};

function getWhoisFromIpAddress(req, res, done) {
    let whoisIpAddress = req.query.whoisIpAddress;

    whoisRepo.getWhoIs(whoisIpAddress, (err, result) => {
        if (err) return done(err, result);

        res.json({
            result: result
        });
    })
}

function getWhoisFromDomain(req, res, done) {
    let whoisDomain = req.query.whoisDomain;

    whoisRepo.getWhoIs(whoisDomain, (err, result) => {
        if (err) return done(err, result);

        res.json({
            result: result
        });
    })
}
const whoisRepo = require('../dataAccess/whoisRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/whois', getWhois);
};

function getWhois(req, res, done) {
    let whoisIpAddress = req.query.whoisIpAddress;

    whoisRepo.getWhoIs(whoisIpAddress, (err, result) => {
        if (err) return done(err, result);

        res.json({
            result: result
        });
    })
}


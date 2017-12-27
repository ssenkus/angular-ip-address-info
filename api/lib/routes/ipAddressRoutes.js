const ipAddressRepo = require('../dataAccess/ipAddressRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/ipaddress/:ipaddr', getIpAddressInfo);
};

function getIpAddressInfo(req, res, done) {
    // TODO: add validation for IP address

    ipAddressRepo.getIpAddressInfo(req.params.ipaddr, (err, result) => {
        if (err) return done(err);

        return done(null, result);
    });
}


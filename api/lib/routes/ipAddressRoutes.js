const ipAddressRepo = require('../dataAccess/ipAddressRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/ipaddress/:ipaddr', getIpAddressInfo);
};

function getIpAddressInfo(req, res, done) {
    // TODO: add validation for IP address
    console.log('got here');
    ipAddressRepo.getIpAddressInfo(req.params.ipaddr, (err, result) => {
        console.log('got here', err, result);
        if (err) return done(err);

        return res.json(JSON.parse(result.body));
    });
}


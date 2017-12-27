const ipAddressRepo = require('../dataAccess/ipAddressRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/ipaddress/:ipaddr', getIpAddressInfo);
};

function getIpAddressInfo(req, res, done) {
    return res.json({
        city: 'Test',
        region_code: 'TS',
        zip_code: '12345',
        latitude: 45.00,
        longitude: -121.00,
        ip: '0.0.0.0'
    });


    // TODO: add validation for IP address
    //
    // ipAddressRepo.getIpAddressInfo(req.params.ipaddr, (err, result) => {
    //     if (err) return done(err);
    //
    //     return done(null, result);
    // });
}


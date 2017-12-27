'use strict';
// const log = require('../log.js');
const ipAddressRepo = require('../dataAccess/ipAddressRepository.js');
// const Contact = require('../models/contact.js');


exports.configure = (app) => {
    app.get('/api/:v?/ipaddress', getWhois);
};

function getWhois(req, res, done) {
    console.log('hit ipAddressRoute', req);

    ipAddressRepo.getIpAddressInfo((err, result) => {
        if (err) return done(err);

        console.log('ipAddressRepo results', result);

        done();
    })
}


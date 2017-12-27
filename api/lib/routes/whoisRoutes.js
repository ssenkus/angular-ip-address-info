const whoisRepo = require('../dataAccess/whoisRepository.js');

exports.configure = (app) => {
    app.get('/api/:v?/whois', getWhois);
};

function getWhois(req, res, done) {
    console.log('hit getWhois', req);

    whoisRepo.getWhoIs((err, result) => {
        if (err) return done(err);

        console.log('whoisRepo results', result);

        done();
    })
}


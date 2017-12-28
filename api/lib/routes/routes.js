const whoisRoutes = require('./whoisRoutes.js');
const ipAddressRoutes = require('./ipAddressRoutes.js');

exports.configure = function (app) {

    app.options('*', function(req, res){
        res.status(200);
        res.send('');
    });

    app.get('/', function (req, res) {
        res.redirect('/app');
    });

    whoisRoutes.configure(app);
    ipAddressRoutes.configure(app);

    // 404 handler
    app.use(function (req, res, next) {
        res.status(404);
        res.type('txt');
        res.send('Unknown route');
    });
};

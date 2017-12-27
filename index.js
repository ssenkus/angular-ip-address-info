const routes = require('./api/lib/routes/routes.js');
const  express = require('express');
const bodyParser = require('body-parser');
// var favicon = require('serve-favicon');
// var errorHandler = require('./errorHandler.js');
// var routes = require('../routes/routes.js');



let server = null;



var app = express();

var appFolder = __dirname + '/app/';
app.use('/', express.static(appFolder, {
    index: 'index.html'
}));
// app.use(favicon(appFolder + '/images/favicon.ico'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));


// app.use(errorHandler.handler);

server = app.listen(8080, function () {
    console.log('Express server listening on port ' + 8080);
});

routes.configure(app);
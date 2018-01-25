// TODO: move this into the lib/runtime folder


const routes = require('./api/lib/routes/routes.js');
// const errorHandler = require('./api/lib/runtime/errorHandler.js');
const express = require('express');
const bodyParser = require('body-parser');
// const favicon = require('serve-favicon');



let server = null;
let app = express();

let appFolder = __dirname + '/app/';

app.use('/', express.static(appFolder, {
    index: 'index.html'
}));
// app.use(favicon(appFolder + '/images/favicon.ico'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(errorHandler.handler);

server = app.listen(8080, function () {
    console.log('Express server listening on port ' + 8080);
});

routes.configure(app);
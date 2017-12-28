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


// app.use(errorHandler.handler);

server = app.listen(8080, function () {
    console.log('Express server listening on port ' + 8080);
});

routes.configure(app);
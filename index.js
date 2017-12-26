var server = null;

// function startServer() {
var express = require('express');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
// var errorHandler = require('./errorHandler.js');
// var routes = require('../routes/routes.js');

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

// var io = require('socket.io')(server);
// io.on('connection', function(socket){
//     log.info('User connected');
// });
// routes.configure(app, io);


// hookUpEvents();
//   socketMonitor.start(server);
// }
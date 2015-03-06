'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var config = require('./config/config')['development'];
var controllers = require('./controllers');

require('./config/mongoose')(mongoose, config);
require('./config/express')(app, config);
require('./config/routes')(app, controllers);

app.listen(config.port, function () {
    console.log('Server listening on port: ', config.port);
});

"use strict";

var mongoose = require('mongoose');
var express = require('express');
var app = express();

var config = require('./server/config/config');
var controllers = require('./server/controllers');
var data = require('./server/data');

require('./server/config/express')(app, config);
require('./server/config/mongoose')(mongoose, config);
require('./server/config/passport')(data.user);
require('./server/config/routes')(app, controllers);

app.listen(config.port, function () {
    console.log('Server listening on port: ', config.port);
});

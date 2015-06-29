"use strict";
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    db: 'mongodb://localhost:27017/mean-tweet',
    port: process.env.PORT || 8080,
    session: {
        resave: true,
        saveUninitialized: true,
        secret: 'uniqueunicorns'
    },
    rootPath: rootPath
};
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var config = require('./config')['development'];
var passport = require('./passport');

module.exports = function (app, config) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());

    app.use(expressSession(config.session));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
        res.header('Access-Control-Allow-Headers',
            [
                'X-Requested-With',
                'X-Custom-Header',
                'Content-Type',
                'Content-Length',
                'Access-Control-Allow-Methods',
                'Authorization'
            ]);

        next();
    });
};
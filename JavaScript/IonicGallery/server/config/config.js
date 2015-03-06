'use strict';

module.exports = {
    development: {
        db: 'mongodb://admin:admin@ds039291.mongolab.com:39291/ionic-gallery',
        port: process.env.NODE_ENV || 8080,
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    },
    production: {
        db: 'mongodb://admin:admin@ds039291.mongolab.com:39291/ionic-gallery',
        port: process.env.NODE_ENV || 8081,
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    }
};
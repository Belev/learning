'use strict';

module.exports = {
    development: {
        db: 'mongodb://admin:admin@ds039291.mongolab.com:39291/ionic-gallery',
        port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
        ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    },
    production: {
        db: 'mongodb://admin:admin@ds039291.mongolab.com:39291/ionic-gallery',
        port: process.env.OPENSHIFT_NODEJS_PORT || 8081,
        ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    }
};
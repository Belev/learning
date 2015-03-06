'use strict';

module.exports = {
    development: {
        db: 'mongodb://localhost/galleryApp-dev',
        port: process.env.NODE_ENV || 8080,
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    },
    production: {
        db: 'mongodb://localhost/galleryApp',
        port: process.env.NODE_ENV || 8081,
        session: {
            resave: true,
            saveUninitialized: true,
            secret: 'uniqueunicorns'
        }
    }
};
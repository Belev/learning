"use strict";

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (userData) {
    passport.use(new LocalStrategy(function (username, password, done) {
        userData.getByUsername(username)
            .then(function (user) {
                if (!user) {
                    return done(null, false, {message: 'No such username.'});
                }

                if (!user.authenticate(password)) {
                    return done(null, false, {message: 'Invalid password.'});
                }

                return done(null, user, {message: 'You successfully logged in.'});
            }, function (err) {
                return done(err);
            });
    }));

    passport.serializeUser(function (user, done) {
        if (user) {
            done(null, user.id);
        }
    });

    passport.deserializeUser(function (id, done) {
        userData.getById(id)
            .then(function (user) {
                done(null, user);
            }, function (err) {
                done(err);
            });
    });
};
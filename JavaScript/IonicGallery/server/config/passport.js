'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

// data can be injected to the module, so the code will be more testable
var userData = require('../data/user');

module.exports = (function () {
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        userData.getUserByUsername(username)
            .then(function (user) {
                if (!user) {
                    return done(null, false, {message: 'No such username.'});
                }

                if (!user.authenticate(password)) {
                    return done(null, false, {message: 'Invalid password.'});
                }

                return done(null, user, {message: 'You successfully logged in.'});
            })
            .fail(function (error) {
                return done(error);
            })
    }));

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        userData.getUserByUsername(username)
            .then(function (user) {
                if (user) {
                    return done(null, false, {message: 'Username is already in use.'});
                }

                userData.createNewUser(username, password)
                    .then(function (newUser) {
                        return done(null, newUser, {message: 'User sign up successfully.'});
                    })
                    .fail(function (error) {
                        return done(error);
                    })
            })
            .fail(function (error) {
                return done(error);
            })
    }));

    passport.serializeUser(function (user, done) {
        if (user) {
            done(null, user.id);
        }
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (error, user) {
            done(error, user);
        });
    });

    return passport;
})();
'use strict';

// can inject passport from outside
var passport = require('../config/passport');

module.exports = {
    login: function (req, res, next) {
        var loginAuthenticate = passport.authenticate('local-login', function (error, user, info) {
            if (error) {
                return next(error);
            }

            req.login(user, function (logInError) {
                if (logInError) {
                    return next(logInError);
                }

                res.json({
                    user: user,
                    info: info
                });
            });
        });

        loginAuthenticate(req, res, next);
    },
    signup: function (req, res, next) {
        var signupAuthenticate = passport.authenticate('local-signup', function (error, user, info) {
            if (error) {
                return next(error);
            }

            res.json({
                user: user,
                info: info
            });
        });

        signupAuthenticate(req, res, next);
    },
    isAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    },
    logout: function (req, res, next) {
        req.logOut();
        res.send('User logged out successfully.');
    }
};
"use strict";

var passport = require('passport');

module.exports = {
    login: function (req, res, next) {
        var login = passport.authenticate('local', function (error, user) {
            if (error) {
                return next(error);
            }

            if (!user) {
                return res.json({success: false});
            }

            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }

                res.json({
                    user: {
                        username: user.username,
                        createdOn: user.createdOn
                    },
                    success: true
                });
            });
        });

        login(req, res, next);
    },
    isAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.status(403).send('Access denied.');
    },
    logout: function (req, res, next) {
        console.log('User: ' + req.user + ' logout.');
        req.logOut();
        res.json({success: true});
    }
};
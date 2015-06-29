"use strict";

var userData = require('../data').user;
var encryption = require('../utils/encryption');

module.exports = {
    register: function (req, res, next) {
        var newUserInfo = req.body;

        if (newUserInfo.password != newUserInfo.confirmPassword) {
            res.status(400).send('Passwords are not equal.');
        }
        else {
            newUserInfo.salt = encryption.generateSalt();
            newUserInfo.hashPass = encryption.generateHashedPassword(newUserInfo.salt, newUserInfo.password);

            userData.create(newUserInfo)
                .then(function (user) {
                    req.logIn(user, function (err) {
                        if (err) {
                            res.status(400).end();
                        }
                        else {
                            res.status(200).end();
                        }
                    })
                }, function (err) {
                    res.status(400).send('Failed to register user.');
                });
        }
    }
};
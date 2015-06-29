"use strict";

var User = require('../models/UserModel');
var Q = require('q');
var encryption = require('../utils/encryption');

function getById (userId) {
    var deffered = Q.defer();

    User.findById(userId, function (err, user) {
        if(err) {
            deffered.reject(err);
            return;
        }

        deffered.resolve(user);
    });

    return deffered.promise;
}

function getByUsername (username) {
    var deffered = Q.defer();

    User.findOne()
        .where('username', username)
        .exec(function (err, user) {
            if(err) {
                deffered.reject(err);
                return;
            }

            deffered.resolve(user);
        });

    return deffered.promise;
}

function createUser (userInfo) {
    var deferred = Q.defer();

    var newUserInfo = {
        username: userInfo.username
    };

    newUserInfo.salt = encryption.generateSalt();
    newUserInfo.hashPass = encryption.generateHashedPassword(newUserInfo.salt, userInfo.password);

    User.create(newUserInfo, function (error, newUser) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(newUser);
        }
    });

    return deferred.promise;
}

module.exports = {
    getById: getById,
    getByUsername: getByUsername,
    create: createUser
};
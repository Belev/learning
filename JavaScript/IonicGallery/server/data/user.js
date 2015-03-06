'use strict';

var User = require('../models/User');
var q = require('q');
var encryption = require('../utils/encryption');

module.exports = {
    getUserImages: function (userId) {
        var deferred = q.defer();

        User.findById(userId, function (error, user) {
            if (error) {
                deferred.reject({
                    error: error,
                    statusCode: 404,
                    message: 'There is no such user.'
                });
            } else {
                deferred.resolve({
                    images: user.images,
                    message: 'Got user images successfully.'
                });
            }
        });

        return deferred.promise;
    },
    saveUserImage: function (userId, imageSrc) {
        var deferred = q.defer();

        User.findById(userId, function (error, user) {
            if (error) {
                deferred.reject({
                    error: error,
                    statusCode: 404,
                    message: 'There is no such user.'
                });
            } else {
                user.images.push(imageSrc);

                user.save(function (error) {
                    if (error) {
                        deferred.reject({
                            error: error,
                            statusCode: 500,
                            message: 'Can not save user image.'
                        });
                    } else {
                        deferred.resolve({
                            message: 'Image saved successfully.'
                        });
                    }
                });
            }
        });

        return deferred.promise;
    },
    getUserByUsername: function (username) {
        var deferred = q.defer();

        User.findOne()
            .where('username').equals(username)
            .exec(function (error, user) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    },
    createNewUser: function (username, password) {
        var deferred = q.defer();

        var newUserInfo = {
            username: username
        };

        newUserInfo.salt = encryption.generateSalt();
        newUserInfo.hashPassword = encryption.generateHashedPassword(newUserInfo.salt, password);

        User.create(newUserInfo, function (error, newUser) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(newUser);
            }
        });

        return deferred.promise;
    }
};
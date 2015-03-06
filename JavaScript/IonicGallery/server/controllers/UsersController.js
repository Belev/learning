'use strict';

// userData can be injected to the module, so the code will be more testable
var userData = require('../data/user');

function handlePromiseResponse(res, promise) {
    promise
        .then(function (result) {
            res.send(result.images ? result.images : result.message);
        })
        .fail(function (error) {
            res.send(error.statusCode, error.message);
        })
}

module.exports = {
    getUserImages: function (req, res) {
        var userId = req.params.userId;

        var getUserImagesPromise = userData.getUserImages(userId);
        handlePromiseResponse(res, getUserImagesPromise);
    },
    saveUserImage: function (req, res) {
        var userId = req.params.userId;
        var imageSrc = req.body.imageSrc;

        var saveUserImagePromise = userData.saveUserImage(userId, imageSrc)
        handlePromiseResponse(res, saveUserImagePromise);
    }
};
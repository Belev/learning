"use strict";

var models = require('../models');

module.exports = function (mongoose, config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.once('open', function (error) {
        if (error) {
            console.log('Error: ' + error);
            return;
        }

        console.log('Database up and running...');
    });

    db.on('error', function (error) {
        console.log('Database error: ' + err);
    });
};
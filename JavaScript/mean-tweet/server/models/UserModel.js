"use strict";

var encryption = require('../utils/encryption');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: 'Username is required.',
        unique: 'User name must be unique.',
        trim: true
    },
    hashPass: {
        type: String,
        required: 'Password is required.'
    },
    salt: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.method({
    authenticate: function (password) {
        var isPasswordCorrect = encryption.generateHashedPassword(this.salt, password) === this.hashPass;
        return isPasswordCorrect;
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
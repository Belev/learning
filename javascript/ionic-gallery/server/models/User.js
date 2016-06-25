'use strict';

var mongoose = require('mongoose');
var encryption = require('../utils/encryption');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: 'You must fill in your username.',
        unique: 'Username already exists. Please choose another one.',
        index: true,
        trim: true
    },
    salt: {
        type: String
    },
    hashPassword: {
        type: String,
        required: 'You must fill in your password.'
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    images: {
        type: [Schema.Types.Image]
    }
});

userSchema.method({
    authenticate: function (password) {
        var isPasswordCorrect = encryption.generateHashedPassword(this.salt, password) === this.hashPassword;
        return isPasswordCorrect;
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
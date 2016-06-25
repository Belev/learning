'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    src: {
        type: String,
        required: 'You should provide src for your image.'
    }
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;
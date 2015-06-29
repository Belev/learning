"use strict";

var path = require('path');

module.exports = function (app, controllers) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });

    app.get('/views/partials/:name', function (req, res) {
        var name = req.params.name;
        res.sendFile(path.join(__dirname, '../../public/app/views/partials', name));
    });

    app.post('/auth/login', controllers.auth.login);
    app.get('/auth/logout', controllers.auth.logout);

    app.post('/api/users', controllers.user.register);

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });
};
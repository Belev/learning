'use strict';

module.exports = function (app, controllers) {
    // home page end point
    app.get('/', controllers.home.getHomeInfo);

    // user images end points
    app.get('/api/user/:userId/images', controllers.user.getUserImages);
    app.post('/api/user/:userId/saveImage', controllers.user.saveUserImage);

    // auth end points
    app.post('/auth/login', controllers.auth.login);
    app.post('/auth/signup', controllers.auth.signup);
    app.get('/auth/logout', controllers.auth.logout);
};
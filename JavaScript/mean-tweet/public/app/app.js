var app = angular.module('mean-tweet-app', ['ngResource', 'ngRoute'])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://localhost:8080');

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/partials/home.html'
        })
        .when('/register', {
            templateUrl: 'views/partials/register.html'
        })
        .when('/login', {
            templateUrl: 'views/partials/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function ($rootScope, $window, $location, notifier) {

});
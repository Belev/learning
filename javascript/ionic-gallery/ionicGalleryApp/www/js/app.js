// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter',
    [
        'ionic', 'angular-data.DSCacheFactory', 'starter.controllers', 'starter.services', 'ngMessages', 'ngCordova'
    ]);

app.run(function ($ionicPlatform, $ionicLoading, $rootScope, DSCacheFactory) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        DSCacheFactory('imagesCache', {storageMode: 'localStorage', maxAge: 1000000, deleteOnExpire: 'aggressive'});

        $rootScope.$on('loading.show', function () {
            $ionicLoading.show({template: 'Loading ...'});
        });

        $rootScope.$on('loading.hide', function () {
            $ionicLoading.hide();
        });
    });
});

app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
    // set tabs position for all devices because there are different default behaviours
    $ionicConfigProvider.tabs.position('bottom');

    $httpProvider.interceptors.push('loadingInterceptor');

    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppController'
        })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('app.save', {
            url: "/save",
            views: {
                'menuContent': {
                    templateUrl: "templates/save.html",
                    controller: "SaveImageController"
                }
            }
        })
        .state('app.gallery', {
            url: "/gallery",
            views: {
                'menuContent': {
                    templateUrl: "templates/gallery.html",
                    controller: "GalleryController"
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('app/home');
});

angular.module('starter.controllers', []);
angular.module('starter.services', ['ngCookies']);
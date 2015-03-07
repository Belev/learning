angular.module('starter.controllers')
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.registerData = {};

        // Login modal - show, close, login
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.loginModal = modal;
        });

        // Open the login modal
        $scope.showLogin = function () {
            $scope.loginModal.show();
        };

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.loginModal.hide();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };

        // Register modal
        $ionicModal.fromTemplateUrl('templates/register.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.registerModal = modal;
        });

        // Open the register modal
        $scope.showSignup = function () {
            $scope.registerModal.show();
        };

        // Triggered in the register modal to close it
        $scope.closeSignup = function () {
            $scope.registerModal.hide();
        };

        // Perform the register action when the user submits the login form
        $scope.doSignup = function () {
            console.log('Doing signup', $scope.registerData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeSignup();
            }, 1000);
        };
    });
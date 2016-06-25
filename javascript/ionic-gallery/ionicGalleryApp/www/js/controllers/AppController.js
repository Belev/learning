angular.module('starter.controllers')
    .controller('AppController', ['$scope', '$ionicModal', '$state', 'auth', 'identity',
        function ($scope, $ionicModal, $state, auth, identity) {
            function goToState(state) {
                $state.go(state);
            }

            $scope.identity = identity;

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
                auth.login($scope.loginData)
                    .then(function () {
                        $scope.closeLogin();

                        goToState('app.gallery');
                    });
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

            // Perform the register action when the user submits the register form
            $scope.doSignup = function () {
                auth.signup($scope.registerData)
                    .then(function () {
                        $scope.closeSignup();

                        goToState('app.gallery');
                    });
            };

            $scope.doLogout = function () {
                auth.logout()
                    .then(function () {
                        goToState('app.home');
                    });
            }
        }]);
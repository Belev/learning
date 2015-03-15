angular.module('starter.controllers')
    .controller('MenuController', ['$scope', '$ionicSideMenuDelegate',
        function ($scope, $ionicSideMenuDelegate) {
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
        }]);
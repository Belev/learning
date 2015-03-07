angular.module('starter.controllers')
    .controller('MenuCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });
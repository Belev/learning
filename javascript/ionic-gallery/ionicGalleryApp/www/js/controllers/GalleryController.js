angular.module('starter.controllers')
    .controller('GalleryController', ['$scope', 'images', 'identity', function ($scope, images, identity) {
        function getUserImages(userId, forceRefresh) {
            images.getAllImagesForUser(userId, forceRefresh)
                .then(function (userImages) {
                    $scope.images = userImages;
                    console.log($scope.images);
                })
                .finally(function () {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        }

        var currentUser = identity.getCurrentUser();

        if (currentUser) {
            getUserImages(currentUser._id);
        }

        $scope.updateGalleryImages = function (forceRefresh) {
            getUserImages(currentUser._id, forceRefresh);
        };
    }]);
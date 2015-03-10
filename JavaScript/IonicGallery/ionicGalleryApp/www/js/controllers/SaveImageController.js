angular.module('starter.controllers')
    .controller('SaveImageController', ['$scope', '$cordovaCamera', '$state', 'images', 'identity',
        function ($scope, $cordovaCamera, $state, images, identity) {
            function saveImage(imageData) {
                var imageSrc = 'data:image/jpeg;base64,' + imageData;

                images.saveUserImage(currentUser._id, imageSrc)
                    .then(function () {
                        console.log('Successfully saved your image.');
                        $state.go('app.gallery');
                    });
            }

            function cordovaCameraGetPicture(sourceType) {
                var options = {
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: sourceType,
                    targetWidth: 300,
                    targetHeight: 300
                };

                return $cordovaCamera.getPicture(options);
            }

            var currentUser = identity.getCurrentUser();

            $scope.makeImage = function () {
                cordovaCameraGetPicture(Camera.PictureSourceType.CAMERA)
                    .then(saveImage);
            };

            $scope.selectImage = function () {
                cordovaCameraGetPicture(Camera.PictureSourceType.SAVEDPHOTOALBUM)
                    .then(saveImage);
            };
        }]);

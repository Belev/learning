angular.module('starter.controllers')
    .controller('SaveImageController', ['$scope', '$cordovaCamera', '$state', 'images', 'identity',
        function ($scope, $cordovaCamera, $state, images, identity) {
            function saveImage(imageSrc) {
                images.saveUserImage(currentUser._id, imageSrc)
                    .then(function () {
                        console.log('Successfully saved your image.');
                        $state.go('app.gallery');
                    });
            }

            var currentUser = identity.getCurrentUser();
            //$scope.message = currentUser;

            $scope.makeImage = function () {
                var options = {
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    targetWidth: 300,
                    targetHeight: 300,
                    quality: 80
                };

                $cordovaCamera.getPicture(options)
                    .then(function (imageData) {
                        var imgSrc = 'data:image/jpeg;base64,' + imageData;
                        saveImage(imgSrc);
                    })
                    .error(function (error) {
                        console.log('Error while shooting.' + error);
                    });
            };

            // TODO: fix when image is selected from device
            $scope.selectImage = function () {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                };

                $cordovaCamera.getPicture(options).then(function (imageUri) {
                    saveImage(imageUri);
                }, function (err) {
                    alert("Error while selecting image from device: " + err);
                });
            };
        }]);

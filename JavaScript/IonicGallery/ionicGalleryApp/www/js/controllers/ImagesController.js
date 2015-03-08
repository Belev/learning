angular.module('starter.controllers')
    .controller('ImagesController', ['$scope', '$cordovaCamera', '$state', 'images', 'identity',
        function ($scope, $cordovaCamera, $state, images, identity) {
            // TODO: fix image saving from camera and storage device!!!
            var currentUser = identity.getCurrentUser();

            if (currentUser) {
                images.getAllImagesForUser(currentUser.id)
                    .then(function (userImages) {
                        $scope.images = userImages;
                        console.log($scope.images);
                    });
            }

            $scope.updateGalleryImages = function () {
                images.getAllImagesForUser(currentUser.id)
                    .then(function (userImages) {
                        $scope.images = userImages;
                        console.log($scope.images);
                    });
            };

            $scope.makeImage = function () {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
                    allowEdit: false,
                    encodingType: Camera.EncodingType.JPEG,
                    popoverOptions: CameraPopoverOptions
                };

                $cordovaCamera.getPicture(options)
                    .then(function (imageUri) {
                        $scope.saveImage(imageUri);
                    })
                    .error(function (error) {
                        console.log('Error while shooting.' + error);
                    });

                $cordovaCamera.cleanup()
                    .then(function () {

                    })
                    .error(function (error) {
                        console.log('Error cleanup: ' + error);
                    });
            };

            $scope.saveImage = function (imageSrc) {
                images.saveUserImage(currentUser.id, imageSrc)
                    .then(function () {
                        console.log('Successfully saved your image.');
                        $scope.updateGalleryImages();
                        $state.go('app.gallery');
                    });
            };

            $scope.onFileChange = function (element) {
                var image = element.files[0];
                $scope.saveImage(image.name);
            };
        }]);
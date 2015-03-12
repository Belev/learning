angular.module('starter.services')
    .factory('images', ['$http', '$q', 'DSCacheFactory',
        function ($http, $q, DSCacheFactory) {
            var imagesCache = DSCacheFactory.get('imagesCache');

            function getAllImagesForUser(userId, forceRefresh) {
                var deferred = $q.defer();
                var requestOptions = {
                    method: 'GET',
                    url: 'http://ionicgalleryapi-mbelev.rhcloud.com/api/user/' + userId + '/images'
                };

                var cacheKey = 'imagesCache-' + userId;
                var userImages = null;

                if (!forceRefresh) {
                    userImages = imagesCache.get(cacheKey);
                }

                if (userImages) {
                    console.log('Get images from cache.');
                    deferred.resolve(userImages);
                } else {
                    $http(requestOptions)
                        .success(function (data, status, headers, config) {
                            console.log('Get images from server.');
                            imagesCache.put(cacheKey, data);
                            deferred.resolve(data);
                        })
                        .error(function (data, status, headers, config) {
                            deferred.reject();
                        });
                }

                return deferred.promise;
            }

            function saveUserImage(userId, imageSrc) {
                var deferred = $q.defer();
                console.log(userId + ' ' + imageSrc);

                var requestOptions = {
                    method: 'POST',
                    url: 'http://ionicgalleryapi-mbelev.rhcloud.com/api/user/' + userId + '/saveImage',
                    data: {
                        imageSrc: imageSrc
                    }
                };

                $http(requestOptions)
                    .success(function (data, status, headers, config) {
                        deferred.resolve();
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject();
                    });

                return deferred.promise;
            }

            return {
                getAllImagesForUser: getAllImagesForUser,
                saveUserImage: saveUserImage
            }
        }]);
angular.module('starter.services')
    .factory('images', ['$http', '$q',
        function ($http, $q) {
            return {
                getAllImagesForUser: function (userId) {
                    var deferred = $q.defer();
                    var requestUrl = 'http://ionicgalleryapi-mbelev.rhcloud.com/api/user/' + userId + '/images';

                    $http.get(requestUrl)
                        .success(function (data, status, headers, config) {
                            deferred.resolve(data);
                        })
                        .error(function (data, status, headers, config) {
                            deferred.reject();
                        });

                    return deferred.promise;
                },
                saveUserImage: function (userId, imageSrc) {
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
            }
        }]);
angular.module('starter.services')
    .factory('auth', ['$http', '$q', 'identity',
        function ($http, $q, identity) {
            function makePromiseRequest(requestOptions) {
                var deferred = $q.defer();

                $http(requestOptions)
                    .success(function (data, status, headers, config) {
                        if (!data.user) {
                            identity.setCurrentUser(undefined);
                        } else {
                            identity.setCurrentUser({
                                _id: data.user._id
                            });
                        }

                        deferred.resolve();
                    })
                    .error(function (data, status, headers, config) {
                        console.log('Error ' + data);
                        deferred.reject();
                    });

                return deferred.promise;
            }

            return {
                signup: function (user) {
                    var requestOptions = {
                        method: 'POST',
                        url: 'http://ionicgalleryapi-mbelev.rhcloud.com/auth/signup',
                        data: user
                    };

                    return makePromiseRequest(requestOptions);
                },
                login: function (user) {
                    var requestOptions = {
                        method: 'POST',
                        url: 'http://ionicgalleryapi-mbelev.rhcloud.com/auth/login',
                        data: user
                    };

                    return makePromiseRequest(requestOptions);
                },
                logout: function () {
                    var requestOptions = {
                        method: 'GET',
                        url: 'http://ionicgalleryapi-mbelev.rhcloud.com/auth/logout'
                    };

                    return makePromiseRequest(requestOptions);
                }
            };
        }]);
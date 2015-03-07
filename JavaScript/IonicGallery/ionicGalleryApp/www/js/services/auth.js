angular.module('starter.services')
    .factory('auth', ['$http', '$q', 'identity',
        function ($http, $q, identity) {
            function makePromiseRequest(requestOptions) {
                var deferred = $q.defer();

                $http(requestOptions)
                    .success(function (data, status, headers, config) {
                        identity.setCurrentUser(data.user);

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
                        url: 'http://localhost:8080/auth/signup',
                        data: user
                    };

                    return makePromiseRequest(requestOptions);
                },
                login: function (user) {
                    var requestOptions = {
                        method: 'POST',
                        url: 'http://localhost:8080/auth/login',
                        data: user
                    };

                    return makePromiseRequest(requestOptions);
                },
                logout: function () {
                    var requestOptions = {
                        method: 'GET',
                        url: 'http://localhost:8080/auth/logout'
                    };

                    return makePromiseRequest(requestOptions);
                }
            };
        }]);
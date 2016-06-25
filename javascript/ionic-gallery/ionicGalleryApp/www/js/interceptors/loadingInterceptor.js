angular.module('starter.services')
    .factory('loadingInterceptor', ['$rootScope', function ($rootScope) {
        return {
            request: function (config) {
                $rootScope.$broadcast('loading.show');
                return config;
            },
            response: function (response) {
                $rootScope.$broadcast('loading.hide');
                return response;
            }
        }
    }]);
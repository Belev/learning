angular.module('starter.services')
    .factory('identity', ['$cookieStore', function ($cookieStore) {
        var COOKIE_STORAGE_KEY = 'current-user';
        var currentLoggedInUser;

        return {
            getCurrentUser: function () {
                var cookieUser = $cookieStore.get(COOKIE_STORAGE_KEY);
                if (cookieUser) {
                    return cookieUser;
                }

                return currentLoggedInUser;
            },
            setCurrentUser: function (user) {
                if (user) {
                    $cookieStore.put(COOKIE_STORAGE_KEY,
                        {
                            username: user.username,
                            password: user.hashPassword,
                            id: user.id,
                            images: user.images
                        });
                } else {
                    $cookieStore.remove(COOKIE_STORAGE_KEY);
                }

                currentLoggedInUser = user;
            },
            isAuthenticated: function () {
                return !!this.getCurrentUser();
            }
        };
    }]);
angular.module('sampleApp', ['HomeCtrl','LoginCtrl', 'commentService', 'ngRoute', 'CookiesService']);

angular.module('sampleApp')    
    .factory('AuthInterceptor', function(Cookies) {
        return {
            request: function(config) {
                var token = Cookies.get('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },

            requestError: function(config) {
                return config;
            },

            response: function(res) {
                return res;
            },

            responseError: function(res) {
                return res;
            }
        }        
    })

    .config(function($httpProvider) {

        // $cookies.put('dsada', 'dasdas');
        $httpProvider.interceptors.push('AuthInterceptor');
    })

    .config(function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/home'
        });



    });

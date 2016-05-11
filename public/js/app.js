angular.module('sampleApp', ['HomeCtrl','LoginCtrl','NavCtrl', 'RegisterCtrl','TaskService', 'ngRoute', 'CookiesService']);

angular.module('sampleApp')    
    .factory('AuthInterceptor', function(Cookies,$q) {
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
                
                // To fix error handler will not be called when the error is 400
                // https://github.com/angular/angular.js/issues/2609
                return $q.reject(res);
            }
        }        
    })

    .config(function($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');
    })

    .config(function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            resolve  : {
                check : function(Cookies,$location) {

                    if (!Cookies.get('token')) {
                        $location.path('/login')
                    }
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/home'
        });



    });

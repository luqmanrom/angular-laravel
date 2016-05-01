
function testInterceptor() {
    return {
        request: function(config) {
            // console.log("Intercepted");
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
}

var sampleApp = angular.module('sampleApp', ['HomeCtrl','LoginCtrl', 'commentService',,'AuthenticationService', 'ngRoute']);

sampleApp
    .factory('testInterceptor', testInterceptor)
    
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('testInterceptor');
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

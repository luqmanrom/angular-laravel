angular.module('NavCtrl', ['AuthenticationService'])
    .controller('NavController', function($scope,Auth,$location) {
        $scope.logout = function() {
            Auth.logout();
            $location.path('/login')

        }

    });


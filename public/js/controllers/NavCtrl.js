angular.module('NavCtrl', ['AuthenticationService'])
    .controller('NavController', ['$scope', 'Auth', '$location', function($scope,Auth,$location) {
        $scope.logout = function() {
            Auth.logout();
            $location.path('/login')

        }

    }]);


angular.module('RegisterCtrl', ['AuthenticationService'])

	.controller('RegisterController', ['$scope', '$http', 'Auth', 'Cookies', '$location', function($scope, $http, Auth, Cookies, $location) {

		$scope.credentials = {};
		$scope.loading = false;

		$scope.submitRegister = function() {
			$scope.loading = true;
			$scope.loading = true;

			var registerPromise = Auth.register($scope.credentials);

			registerPromise
				.then(function(data) {
					$scope.loading = false;

					// Is it possible to pass some values and show it on login page?
					$location.path('/login');
					
				}, function(err) {
					console.log(err);
					$scope.loading = false;
				});

		};			

	}]);
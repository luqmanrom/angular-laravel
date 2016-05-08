angular.module('RegisterCtrl', ['AuthenticationService'])

	.controller('RegisterController', ['$scope', '$http', 'Auth', 'Cookies', '$location', function($scope, $http, Auth, Cookies, $location) {

		$scope.credentials = {};
		$scope.loading = false;

		$scope.submitRegister = function() {
			$scope.loading = true;
			var registerPromise = Auth.register($scope.credentials);

			registerPromise
				.then(function(data) {
					console.log('Success');
					console.log(data);
					return data;
				}, function(err) {
					console.log(err);
					$scope.loading = false;

				});

		};			

	}]);
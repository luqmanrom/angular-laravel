angular.module('LoginCtrl', [])

	.controller('LoginController', function($scope, $http, Auth) {

		$scope.credentials = {};

		$scope.submitLogin = function() {
			var loginPromise = Auth.login($scope.credentials);

			loginPromise
			.success(function(data) {
				document.cookie = "token=" + data.token + "; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/";

				console.log(data);
				return data;
			})
			.error(function(err) {
				console.log(err)
				return err;
			});
		}


	});
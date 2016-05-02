angular.module('LoginCtrl', ['AuthenticationService'])

	.controller('LoginController', function($scope, $http, Auth, $location) {

		$scope.credentials = {};

		$scope.submitLogin = function() {
			var loginPromise = Auth.login($scope.credentials);

			loginPromise
			.success(function(data) {

				$location.path('/home')

				return data;
			})
			.error(function(err) {
				console.log(err)
				return err;
			});
		};

		$scope.tasks = {};

		$scope.getTasks = function() {
			$http({
			  method: 'GET',
			  url: '/api/v1/tasks'
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    $scope.tasks = response.data.data
			  }, function errorCallback(response) {
			  		console.log(response);
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}


	});
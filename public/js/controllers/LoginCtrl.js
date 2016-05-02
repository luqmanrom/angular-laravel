angular.module('LoginCtrl', ['AuthenticationService'])

	.controller('LoginController', function($scope, $http, Auth, Cookies, $location) {

		$scope.credentials = {};

		$scope.submitLogin = function() {
			var loginPromise = Auth.login($scope.credentials);

			loginPromise
				.then(function(data) {
					console.log('Success');
					console.log(data);
					if (data.data.token) {
						Cookies.set('token', data.data.token);
						$location.path('/home')

					}
					return data;
				}, function(err) {
					console.log('Error');
					console.log(err);
				})

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
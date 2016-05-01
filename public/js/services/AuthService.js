angular.module('AuthenticationService', [])

	.factory('Auth', function($http) {

		var loginFunc = function(credentials) {
			return $http({
				method: 'POST',
				url: '/api/v1/auth/login',
				headers: {'accept' : 'application/json'},
				data: {
					'email' : credentials.username,
					'password' : credentials.password
				}
			});

		}

		return {
			login : loginFunc,
			register : function() {},
			saveCookies : $.cookie

		}

	});
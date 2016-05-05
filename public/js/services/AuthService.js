angular.module('AuthenticationService', [])

	.factory('Auth', function($http,Cookies) {

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

		};

		var logoutFunc = function() {
			console.log('Logout');
			Cookies.delete('token');
			return true;
		}

		return {
			login : loginFunc,
			register : function() {},
			logout   : logoutFunc

		}

	});
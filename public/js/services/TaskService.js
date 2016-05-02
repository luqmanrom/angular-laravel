angular.module('TaskService', [])

	.factory('Task', function($http) {

		return {
			get : function() {
				return $http.get('api/v1/tasks');
			},
			show : function(id) {
				return $http.get('/api/v1/tasks/' + id);
			},
			save : function(task) {
				return $http({
					method: 'POST',
					url: 'api/v1/tasks',
					headers: {'accept' : 'application/json'},
					data: task
				});
			},
			destroy : function(id) {
				return $http.delete('api/v1/tasks/' + id);
			}
		}

	});
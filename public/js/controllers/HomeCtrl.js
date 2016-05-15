var app = angular.module('HomeCtrl', []);
app.controller('HomeController', ['$scope', '$http', 'Task', function($scope, $http, Task) {
		$scope.taskData = {};
                console.log('Here');
		// loading variable to show the spinning loading icon
		$scope.loading = true;
		
		// get all the comments first and bind it to the $scope.comments object
		Task.get()
			.success(function(data) {
				$scope.tasks = data.data;
				$scope.loading = false;
			});

		// function to handle submitting the form
		$scope.submitTask = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			Task.save($scope.taskData)
				.success(function(data) {
					$scope.taskData = {};
					// if successful, we'll need to refresh the comment list
					Task.get()
						.success(function(getData) {
							$scope.tasks = getData.data;
							$scope.loading = false;
						});

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a task
		$scope.deleteTask = function(id) {
			$scope.loading = true; 

			Task.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Task.get()
						.success(function(getData) {
							$scope.tasks = getData.data;
							$scope.loading = false;
						});

				});
		};


		// function to get the status of the task
		$scope.getStatus = function(task) {
			if (task.is_done == 0) {
				return "Done";
			} else {
				return "Undo";
			}
		};

		// function to update the status of the task
		$scope.updateStatus = function(task) {
			Task.updateStatus(task)
				.success(function() {
					task.is_done = (task.is_done == 0)? 1 : 0;
					$scope.$apply();
				})
		};


		$scope.statusFilter = function(task) {
			if (task.is_done == 0) {
				return true;
			} else if (task.is_done == 1) {
				return false;
			} else {
				return true;;
			}
		};

		$scope.filterStatus = function(status) {
			
			if (status == 'incomplete') {
				$scope.filterObj.is_done = 0;
			} else if (status == 'all') {
				$scope.filterObj.is_done = "!!";
			} else if (status == 'done') {
				$scope.filterObj.is_done = 1;

			}
		};

		$scope.filterObj = { is_done: "!!"};

	}]);

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel and Angular Sample Web Apps</title>

	<!-- CSS -->
	<link rel="stylesheet" href="lib/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="lib/css/font-awesome.min.css"> 
	<style>
		body 		{ padding-top:30px; }
		form 		{ padding-bottom:20px; }
		.comment 	{ padding-bottom:20px; }
	</style>

	<!-- JS -->
	<script src="lib/js/jquery.min.js"></script>
	<script src="lib/js/angular.min.js"></script>
	<script src="lib/js/angular-route.min.js"></script>


	<script src="js/controllers/HomeCtrl.js"></script> 
	<script src="js/controllers/LoginCtrl.js"></script>
	<script src="js/controllers/NavCtrl.js"></script>
	<script src="js/controllers/RegisterCtrl.js"></script>	
	<script src="js/services/TaskService.js"></script> 
	<script src="js/services/AuthService.js"></script> 
	<script src="js/services/CookiesService.js"></script> 	
	<script src="js/app.js"></script> 

</head>
<body class="container" ng-app="sampleApp" >
	<nav class="navbar navbar-default navbar-fixed-top" ng-controller="NavController">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/#/login">Login</a></li>
			  <li><a href ng-click="logout()">Logout</a></li>
			  <li><a href="/#/register">Register</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>



	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<!-- PAGE TITLE -->
				<div class="page-header">
					<h2>Laravel and Angular Single Page Application</h2>
					<h4>Sample Web Apps</h4>
				</div>				
			</div>
			<ng-view></ng-view>
		</div>
	</div>
</body>
</html>

app.controller("loginController", function ($scope, $state){

	$scope.entrar = function(){
		$state.go("timeline");
	}	

});
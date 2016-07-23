app.controller("timelineController", function ($scope, APIService, $ionicScrollDelegate){
	$scope.bug = {};
	$scope.bugs = [];
	$scope.nenhumBug = false;

	$scope.listaTodosBugs = function(){
		APIService.obterTodosBugs().success(function(res){
			$scope.bugs = res;
			$ionicScrollDelegate.scrollTop(true);
			if(!$scope.bugs.lenght){
				$scope.nenhumBug = true;
			}else{
				$scope.nenhumBug = false;
			}
		});
	}

	$scope.listarTodosBugs();

	$scope.converterData = function(data){
		return moment.(data, "YYYYMMDDHHmmss").fromNow();
	};

	$scope.novoBug = function(){

	}

});
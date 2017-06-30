var app = angular.module('calculatorApp', []);
app.controller('CalculatorCtrl', function($scope){
	$scope.display = "";

	$scope.inputs = function (btn) {
		$scope.display += btn;
	};

	$scope.equal = function() {
		$scope.display = eval($scope.display);
	};

	$scope.power = function() {
		$scope.display = ($scope.display*$scope.display);
	};

	$scope.backspace = function() {
		var back = $scope.display;
		$scope.display = back.slice(0, back.length -1);
	};
		
	$scope.clear = function(btn) {
		$scope.display =  "";
	}
});
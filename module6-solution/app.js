// COUNTS ,, AS ONE ITEM
(function() {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope) {
	$scope.lunch = ""
	$scope.checkIfTooMuch = "Please enter data first";
	$scope.textColor = "red";
	$scope.borderColor = "red";

	$scope.displayColor = function() {
		$scope.textColor = changeColor($scope.lunch);
		$scope.borderColor = changeColor($scope.lunch);
	}


	$scope.displayTooMuch = function() {
		if (checkIfTooMuch($scope.lunch)) {
			console.log($scope.lunch);
			$scope.checkIfTooMuch = "Too much!";
		} else {
			$scope.checkIfTooMuch = "Enjoy!"
		}
	}


	function checkIfTooMuch(lunch) {
		const items = lunch.split(",");
		return items.length > 3;
	}

	function changeColor(lunch) {
		if (lunch.length > 0) {
			return "green";
		}
		return "red";
	}
}

})();
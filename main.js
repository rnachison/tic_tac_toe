// console.log("pastelgoth")
var witchTic = angular.module("witchTic", []);

witchTic.controller('Controlled', function ($scope) {

	$scope.launchFamiliar = function () {
		$scope.owlLaunch = "owl";
	};
});


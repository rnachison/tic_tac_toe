// console.log("pastelgoth")
var witchTic = angular.module("witchTic", []);
var count = 0;
witchTic.controller('Controlled', function ($scope) {

    $scope.testString = "All connected, boo!" ;

    $scope.theCells = [
    {status: "A"}, 
    {status: "B"}, 
    {status: "C"}, 
    {status: "D"}, 
    {status: "E"}, 
    {status: "F"}, 
    {status: "G"}, 
    {status: "H"}, 
    {status: "I"}
    ]  ;

	// $scope.launchFamiliar = function () {
 //        if ((count % 2) === 1) {
 //            $scope.owlLaunch = true;
 //        } else {
 //            $scope.batLaunch = true;
 //        };
 //    };
 //    $scope.launchTic = function () {
 //        if ((count % 2) === 1) {
 //            $scope.isowl = true;
 //        } else {
 //            $scope.isbat = true;
 //        };
 //    };
});


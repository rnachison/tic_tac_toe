// console.log("pastelgoth")
var witchTic = angular.module("witchTic", []);
var count = 0;
witchTic.controller('Controlled', function ($scope) {

    $scope.testString = "All connected, boo!" ;

    $scope.theCells = [
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}, 
    {status: "X"}
    ]  ;

    $scope.counter = 0 ;

    $scope.testJS = function () {
        console.log('JS function working okay') ;
    } ;

    $scope.launchFamiliar = function (thisCell) {
        $scope.counter = $scope.counter + 1 ;
        console.log(thisCell + " was chosen.") ;
        if (($scope.counter % 2) == 1) {
            thisCell.status = "O" ;
        } else {
            thisCell.status = "B" ;
        }
        console.log("Cell is now " + thisCell.status) ;

    } ;

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


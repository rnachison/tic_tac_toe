// console.log("pastelgoth")
var witchTic = angular.module("witchTic", []);
var count = 0;
witchTic.controller('Controlled', function ($scope) {

    $scope.testString = "All connected, boo!" ;

    $scope.theCells = [
    {status: "X", magic: 4}, 
    {status: "X", magic: 9}, 
    {status: "X", magic: 2}, 
    {status: "X", magic: 3}, 
    {status: "X", magic: 5}, 
    {status: "X", magic: 7}, 
    {status: "X", magic: 8}, 
    {status: "X", magic: 1}, 
    {status: "X", magic: 6}
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


// console.log("pastelgoth")
var witchTic = angular.module("witchTic", []);
witchTic.controller('Controlled', function ($scope) {

    $scope.testString = "All connected, boo!" ;

    $scope.theCells = [
    {status: "X", num: 0}, 
    {status: "X", num: 1}, 
    {status: "X", num: 2}, 
    {status: "X", num: 3}, 
    {status: "X", num: 4}, 
    {status: "X", num: 5}, 
    {status: "X", num: 6}, 
    {status: "X", num: 7}, 
    {status: "X", num: 8}
    ]  ;

    $scope.counter = 0 ;


    // Create arrays to store marked cells in
    $scope.owlCells = [];
    $scope.batCells = [];


    $scope.reset = function () {
         $scope.theCells = [
        {status: "X", num: 0}, 
        {status: "X", num: 1}, 
        {status: "X", num: 2}, 
        {status: "X", num: 3}, 
        {status: "X", num: 4}, 
        {status: "X", num: 5}, 
        {status: "X", num: 6}, 
        {status: "X", num: 7}, 
        {status: "X", num: 8}
        ]  ;

        $scope.owlCells = [];
        $scope.batCells = [];

        $scope.owlWon = false;
        $scope.batWon = false;
        $scope.aTie = false;
    } ;

    // Switch cell status to alternate between owl and bat

    $scope.launchFamiliar = function (thisCell) {
        $scope.counter = $scope.counter + 1 ;
        console.log(thisCell + " was chosen.") ;
        if (($scope.counter % 2) == 1) {
            thisCell.status = "O" ;
        } else {
            thisCell.status = "B" ;
        }
        console.log("Cell is now " + thisCell.status) ;

// Create function to add cell values to appropriate arrays

        if (thisCell.status == "O") {
            $scope.owlCells.push(thisCell.num) ;
            console.log($scope.owlCells) ;
        } else {
            $scope.batCells.push(thisCell.num)
            console.log($scope.batCells) ;
        };


// Define winner by checking for winning num combinations in arrays

        if ((($scope.owlCells.indexOf(0) > -1) && ($scope.owlCells.indexOf(1) > -1) && ($scope.owlCells.indexOf(2) > -1)) || (($scope.owlCells.indexOf(3) > -1) && ($scope.owlCells.indexOf(4) > -1) && ($scope.owlCells.indexOf(5) > -1)) || (($scope.owlCells.indexOf(6) > -1) && ($scope.owlCells.indexOf(7) > -1) && ($scope.owlCells.indexOf(8) > -1)) || (($scope.owlCells.indexOf(0) > -1) && ($scope.owlCells.indexOf(3) > -1) && ($scope.owlCells.indexOf(6) > -1)) || (($scope.owlCells.indexOf(1) > -1) && ($scope.owlCells.indexOf(4) > -1) && ($scope.owlCells.indexOf(7) > -1)) || (($scope.owlCells.indexOf(2) > -1) && ($scope.owlCells.indexOf(5) > -1) && ($scope.owlCells.indexOf(8) > -1)) || (($scope.owlCells.indexOf(0) > -1) && ($scope.owlCells.indexOf(4) > -1) && ($scope.owlCells.indexOf(8) > -1)) || (($scope.owlCells.indexOf(2) > -1) && ($scope.owlCells.indexOf(4) > -1) && ($scope.owlCells.indexOf(6) > -1))) {
            $scope.owlWon = true;
        } else if ((($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(1) > -1) && ($scope.batCells.indexOf(2) > -1)) || (($scope.batCells.indexOf(3) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(5) > -1)) || (($scope.batCells.indexOf(6) > -1) && ($scope.batCells.indexOf(7) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(3) > -1) && ($scope.batCells.indexOf(6) > -1)) || (($scope.batCells.indexOf(1) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(7) > -1)) || (($scope.batCells.indexOf(2) > -1) && ($scope.batCells.indexOf(5) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(2) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(6) > -1))) {
            $scope.batWon = true ;
        } else if ($scope.owlCells.length == 5) {
            $scope.aTie = true ;
        } else {
            console.log("not yet");

        };


    } ;



});






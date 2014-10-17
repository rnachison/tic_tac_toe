// console.log("pastelgoth")
var myHttp;

var witchTic = angular.module("witchTic", ["firebase"]);

witchTic.controller('Controlled', function ($scope, $http, $firebase) {

    $scope.remoteGameContainer = 
    $firebase(new Firebase("https://witch-game.firebaseio.com/databaseGameContainer")) ;


    myHttp = $http;

    // $scope.testString = "All connected, boo!" ;

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

// Set click counter at 0

    $scope.counter = 0 ;

// Set total player wins at 0

    $scope.owlVictor = 0 ;
    $scope.batVictor = 0 ;


// Create arrays to store marked cells in

    $scope.owlCells = [];
    $scope.batCells = [];

// Establish win/tie/end variables

    $scope.owlBidden = false;
    $scope.batBidden = false;
    $scope.impasse = false;
    $scope.ended = false;

    // $scope.reset = function () {
    //     console.log("it's working") ;
    // };

    // $scope.launchFamiliar = function () {
    //     console.log("this is fine") ;
    // };


    $scope.gameContainer = {
    theBoard: $scope.theCells,
    clickCounter: $scope.counter,
    owlWins: $scope.owlVictor,
    batWins: $scope.batVictor,
    // owlArray: $scope.owlCells,
    // batArray: $scope.batCells,
    owlWon: $scope.owlBidden,
    batWon: $scope.batBidden,
    aTie: $scope.impasse,
    endGame: $scope.ended,
    // startOver: $scope.reset,
    // callFamiliar: $scope.launchFamiliar,
    } ;

    $scope.remoteGameContainer.$bind($scope, "gameContainer") ;

    $scope.$watch('gameContainer', function() {
        console.log('gameContainer changed!') ;
    }) ;

// Function to reset game on button click

    $scope.reset = function () {

    // Reset cell statuses to clear markers
        $scope.gameContainer.theBoard = [
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

    // Reset owl and bat arrays

        $scope.owlCells = [];
        $scope.batCells = [];

    // reset ng-show so no winner is displayed

        $scope.gameContainer.owlWon = false;
        $scope.gameContainer.batWon = false;
        $scope.gameContainer.aTie = false;

    // Make cells clickable again

        $scope.gameContainer.endGame = false;


    // Reset click counter

        $scope.gameContainer.clickCounter = 0;
    } ;


// Switch cell status to alternate between owl and bat

    $scope.launchFamiliar = function (thisCell) {
        $scope.gameContainer.clickCounter = $scope.gameContainer.clickCounter + 1 ;
        console.log(thisCell + " was chosen.") ;
        if (($scope.gameContainer.clickCounter % 2) == 1) {
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
            $scope.gameContainer.owlWon = true;
            $scope.gameContainer.endGame = true;
            $scope.gameContainer.owlWins = $scope.gameContainer.owlWins + 1 ;
        } else if ((($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(1) > -1) && ($scope.batCells.indexOf(2) > -1)) || (($scope.batCells.indexOf(3) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(5) > -1)) || (($scope.batCells.indexOf(6) > -1) && ($scope.batCells.indexOf(7) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(3) > -1) && ($scope.batCells.indexOf(6) > -1)) || (($scope.batCells.indexOf(1) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(7) > -1)) || (($scope.batCells.indexOf(2) > -1) && ($scope.batCells.indexOf(5) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(0) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(8) > -1)) || (($scope.batCells.indexOf(2) > -1) && ($scope.batCells.indexOf(4) > -1) && ($scope.batCells.indexOf(6) > -1))) {
            $scope.gameContainer.batWon = true ;
            $scope.gameContainer.endGame = true;
            $scope.gameContainer.batWins = $scope.gameContainer.batWins + 1 ;
        } else if ($scope.owlCells.length == 5) {
            $scope.gameContainer.aTie = true ;
        } else {
            console.log("not yet");
        };


    } ;



});






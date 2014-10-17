// console.log("pastelgoth")
var myHttp;

var witchTic = angular.module("witchTic", ["firebase"]);
var FB;
witchTic.controller('Controlled', function ($scope, $firebase, $http) {

    myHttp = $http;

    var witchRef = new Firebase("https://witch-game.firebaseio.com/")
    $scope.remoteGameContainer = 
    $firebase(witchRef) ;
        FB=($scope.remoteGameContainer);

    // $scope.testString = "All connected, boo!" ;

    $scope.theCells = new Object() ;
        $scope.theCells["0"] = {status: "X", num: 0} ; 
        $scope.theCells["1"] = {status: "X", num: 1} ; 
        $scope.theCells["2"] = {status: "X", num: 2} ; 
        $scope.theCells["3"] = {status: "X", num: 3} ; 
        $scope.theCells["4"] = {status: "X", num: 4} ; 
        $scope.theCells["5"] = {status: "X", num: 5} ; 
        $scope.theCells["6"] = {status: "X", num: 6} ; 
        $scope.theCells["7"] = {status: "X", num: 7} ; 
        $scope.theCells["8"] = {status: "X", num: 8} ;

// Set click counter at 0

    $scope.counter = 0 ;

// Set total player wins at 0

    $scope.owlVictor = 0 ;
    $scope.batVictor = 0 ;


// Create win/tie variables

    $scope.owlBidden = false;
    $scope.batBidden = false;
    $scope.tieGame = false;
    $scope.endOfGame = false;

    witchTic.once("value", function (data) {

        console.log(data.val()) ;


        $scope.gameContainer = {
            theBoard: $scope.theCells,
            clickCounter: $scope.counter,
            owlWon: $scope.owlBidden,
            batWon: $scope.batBidden,
            aTie: $scope.tieGame,
            owlWins: $scope.owlVictor,
            batWins: $scope.batVictor,
            endGame: $scope.endOfGame
        } ;


        $scope.remoteGameContainer.$bind($scope, "gameContainer") ;

    });

    $scope.$watch('gameContainer', function() {
    console.log('gameContainer changed!') ;
  }) ;

// Function to reset game on button click

    $scope.reset = function () {

    // Reset cell statuses to clear markers
        $scope.gameContainer.theBoard["0"] = {status: "X", num: 0} ; 
        $scope.gameContainer.theBoard["1"] = {status: "X", num: 1} ; 
        $scope.gameContainer.theBoard["2"] = {status: "X", num: 2} ; 
        $scope.gameContainer.theBoard["3"] = {status: "X", num: 3} ; 
        $scope.gameContainer.theBoard["4"] = {status: "X", num: 4} ; 
        $scope.gameContainer.theBoard["5"] = {status: "X", num: 5} ; 
        $scope.gameContainer.theBoard["6"] = {status: "X", num: 6} ; 
        $scope.gameContainer.theBoard["7"] = {status: "X", num: 7} ; 
        $scope.gameContainer.theBoard["8"] = {status: "X", num: 8} ;


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



// Define winner by checking for winning num combinations in arrays

        if ((($scope.gameContainer.theBoard["0"].status == "O") && ($scope.gameContainer.theBoard["1"].status == "O") && ($scope.gameContainer.theBoard["2"].status == "O")) || (($scope.gameContainer.theBoard["3"].status == "O") && ($scope.gameContainer.theBoard["4"].status == "O") && ($scope.gameContainer.theBoard["5"].status == "O")) || (($scope.gameContainer.theBoard["6"].status == "O") && ($scope.gameContainer.theBoard["7"].status == "O") && ($scope.gameContainer.theBoard["8"].status == "O")) || (($scope.gameContainer.theBoard["0"].status == "O") && ($scope.gameContainer.theBoard["3"].status == "O") && ($scope.gameContainer.theBoard["6"].status == "O")) || (($scope.gameContainer.theBoard["1"].status == "O") && ($scope.gameContainer.theBoard["4"].status == "O") && ($scope.gameContainer.theBoard["7"].status == "O")) || (($scope.gameContainer.theBoard["2"].status == "O") && ($scope.gameContainer.theBoard["5"].status == "O") && ($scope.gameContainer.theBoard["8"].status == "O")) || (($scope.gameContainer.theBoard["0"].status == "O") && ($scope.gameContainer.theBoard["4"].status == "O") && ($scope.gameContainer.theBoard["8"].status == "O")) || (($scope.gameContainer.theBoard["2"].status == "O") && ($scope.gameContainer.theBoard["4"].status == "O") && ($scope.gameContainer.theBoard["6"].status == "O"))) {
            $scope.gameContainer.owlWon = true;
            $scope.gameContainer.endGame = true;
            $scope.gameContainer.owlWins = $scope.gameContainer.owlWins + 1 ;
        } else if ((($scope.gameContainer.theBoard["0"].status == "B") && ($scope.gameContainer.theBoard["1"].status == "B") && ($scope.gameContainer.theBoard["2"].status == "B")) || (($scope.gameContainer.theBoard["3"].status == "B") && ($scope.gameContainer.theBoard["4"].status == "B") && ($scope.gameContainer.theBoard["5"].status == "B")) || (($scope.gameContainer.theBoard["6"].status == "B") && ($scope.gameContainer.theBoard["7"].status == "B") && ($scope.gameContainer.theBoard["8"].status == "B")) || (($scope.gameContainer.theBoard["0"].status == "B") && ($scope.gameContainer.theBoard["3"].status == "B") && ($scope.gameContainer.theBoard["6"].status == "B")) || (($scope.gameContainer.theBoard["1"].status == "B") && ($scope.gameContainer.theBoard["4"].status == "B") && ($scope.gameContainer.theBoard["7"].status == "B")) || (($scope.gameContainer.theBoard["2"].status == "B") && ($scope.gameContainer.theBoard["5"].status == "B") && ($scope.gameContainer.theBoard["8"].status == "B")) || (($scope.gameContainer.theBoard["0"].status == "B") && ($scope.gameContainer.theBoard["4"].status == "B") && ($scope.gameContainer.theBoard["8"].status == "B")) || (($scope.gameContainer.theBoard["2"].status == "B") && ($scope.gameContainer.theBoard["4"].status == "B") && ($scope.gameContainer.theBoard["6"].status == "B"))) {
            $scope.gameContainer.batWon = true ;
            $scope.gameContainer.endGame = true;
            $scope.gameContainer.batWins = $scope.gameContainer.batWins + 1 ;
        } else if ($scope.gameContainer.clickCounter == 9) {
            $scope.gameContainer.aTie = true ;
        } else {
            console.log("not yet");

        };


    } ;



});




// console.log("pastelgoth")

var witchTic = angular.module("witchTic", ["firebase"]);
var FB ;
witchTic.controller('Controlled', function($scope,$firebase) {

    var witchRef = new Firebase("https://witch-game.firebaseio.com/");
    $scope.remoteGameContainer = 
    $firebase(witchRef);
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

// Create end of game (make unclickable) variable

    $scope.endOfGame = false;

// Create waiting variable to show/hide wait message

    $scope.waiting = false;


    witchRef.once("value", function(data) {
        // See how many players are on board

        console.log(data.val());

        console.log($scope.imPlayer);

        // If there are no players, reset

        if(!data.val() || data.val().numPlayers == 2){
          $scope.imPlayer = 0;
        } 
        else {
          $scope.imPlayer = 1;
        }

        $scope.gameContainer = {
            theBoard: $scope.theCells,
            clickCounter: $scope.counter,
            owlWon: $scope.owlBidden,
            batWon: $scope.batBidden,
            aTie: $scope.tieGame,
            owlWins: $scope.owlVictor,
            batWins: $scope.batVictor,
            endGame: $scope.endOfGame,
            numPlayers: $scope.imPlayer +1
        } ;


        $scope.remoteGameContainer.$bind($scope, "gameContainer");
        $scope.reset() ;

    }) ;



    $scope.$watch('gameContainer', function() {
        console.log('gameContainer changed!') ;
    }) ;


// Switch cell status to alternate between owl and bat

    $scope.launchFamiliar = function (thisCell) {
    if ($scope.imPlayer != ($scope.gameContainer.clickCounter % 2)){
      $scope.waiting = true;
    }  
    else {
        $scope.waiting = false;
        $scope.gameContainer.clickCounter ++;
        console.log("Cell was: " + thisCell.status);
        if (($scope.gameContainer.clickCounter % 2) == 1){
        thisCell.status = "O"; 
        determineWin("O");
        } else {
        thisCell.status = "B";
        determineWin("B");
        }
    thisCell.clickNumber ++;
    console.log("Cell is now: " + thisCell.status);
    } 
  };




        // $scope.gameContainer.clickCounter = $scope.gameContainer.clickCounter + 1 ;
        // console.log(thisCell + " was chosen.") ;
        // if (($scope.gameContainer.clickCounter % 2) == 1) {
        //     thisCell.status = "O" ;
        // } else {
        //     thisCell.status = "B" ;
        // }
        // console.log("Cell is now " + thisCell.status) ;



// Define winner by checking for winning num combinations in arrays

    function determineWin(familiar) {

        if ((($scope.gameContainer.theBoard["0"].status == familiar) && ($scope.gameContainer.theBoard["1"].status == familiar) && ($scope.gameContainer.theBoard["2"].status == familiar)) || (($scope.gameContainer.theBoard["3"].status == familiar) && ($scope.gameContainer.theBoard["4"].status == familiar) && ($scope.gameContainer.theBoard["5"].status == familiar)) || (($scope.gameContainer.theBoard["6"].status == familiar) && ($scope.gameContainer.theBoard["7"].status == familiar) && ($scope.gameContainer.theBoard["8"].status == familiar)) || (($scope.gameContainer.theBoard["0"].status == familiar) && ($scope.gameContainer.theBoard["3"].status == familiar) && ($scope.gameContainer.theBoard["6"].status == familiar)) || (($scope.gameContainer.theBoard["1"].status == familiar) && ($scope.gameContainer.theBoard["4"].status == familiar) && ($scope.gameContainer.theBoard["7"].status == familiar)) || (($scope.gameContainer.theBoard["2"].status == familiar) && ($scope.gameContainer.theBoard["5"].status == familiar) && ($scope.gameContainer.theBoard["8"].status == familiar)) || (($scope.gameContainer.theBoard["0"].status == familiar) && ($scope.gameContainer.theBoard["4"].status == familiar) && ($scope.gameContainer.theBoard["8"].status == familiar)) || (($scope.gameContainer.theBoard["2"].status == familiar) && ($scope.gameContainer.theBoard["4"].status == familiar) && ($scope.gameContainer.theBoard["6"].status == familiar))) {
                if (familiar == "O") {
                    $scope.gameContainer.owlWon = true;
                    $scope.gameContainer.owlWins = $scope.gameContainer.owlWins + 1 ;
                } else {
                    $scope.gameContainer.batWon = true ;
                    $scope.gameContainer.batWins = $scope.gameContainer.batWins + 1 ;
                }
                $scope.gameContainer.endGame = true;
        } else if ($scope.gameContainer.clickCounter == 9) {
            $scope.gameContainer.aTie = true ;
        } else {
            console.log("not yet");
        }


    } ;


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


});




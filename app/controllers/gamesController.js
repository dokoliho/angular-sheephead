"use strict";

app.controller("GameController", function($scope, $routeParams, Session, Game) {

  $scope.session = Session.getSession($routeParams.idSession);

  $scope.games =  Game.getGameStore();
  $scope.gameTypes = Game.AllTypes;
  $scope.sessionMatch = function( game ) {
 	return game.getSession() === $scope.session; 	
  };




  $scope.playersIds = [];
  $scope.allPlayer = [];
  for (var i = 0; i < $scope.session.players().length; i++) {
  	$scope.allPlayer.push( {
  		"id" : i,
  		"label" : $scope.session.players()[i]
  	});
  }
  $scope.playerSettings = {
    smartButtonMaxItems: 3,
    smartButtonTextConverter: function(itemText, originalItem) {
        return itemText;
    }
  }
  $scope.playerCustomTexts = { buttonDefaultText: "Wer spielt?"}



  var reset = function() {
    $scope.gameType = $scope.gameTypes[0];
    $scope.players = [];
    $scope.runnings = 0;
    $scope.black = false;
    $scope.tailor = false;
    $scope.shots = 0;
    $scope.lost = false;
    $scope.id = null;
  };

 $scope.write = function() {
    if ($scope.id === null) {
      new Game(
      	$scope.session,
      	$scope.gameType, 
      	$scope.players, 
      	$scope.won, 
      	$scope.tailor, 
      	$scope.black, 
      	$scope.runnings, 
      	$scope.shots);
    }
    else {
      var oldGame = Game.getGame($scope.id);
      oldGame.update(
        $scope.session,
      	$scope.gameType, 
      	$scope.players, 
      	$scope.won, 
      	$scope.tailor, 
      	$scope.black, 
      	$scope.runnings, 
      	$scope.shots);
    }
    reset();
  };

  reset();

});
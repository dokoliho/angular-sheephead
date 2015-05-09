"use strict";

app.controller("GameController", function($scope, $routeParams, Session, Game) {

  $scope.session = Session.getSession($routeParams.idSession);

  $scope.games =  Game.getGameStore();
  $scope.gameTypes = Game.AllTypes;
  $scope.sessionMatch = function( game ) {
 	return game.getSession() === $scope.session; 	
  };


  
  $scope.allPlayer = $scope.session.players().map (function(obj, index) {
  	return {
  		"id" : index,
  		"label" : obj
  	};
  });


  $scope.playerSettings = {
    smartButtonMaxItems: 3,
    smartButtonTextConverter: function(itemText) {
    	return itemText;
    }
  };
  $scope.playerCustomTexts = { buttonDefaultText: "Wer spielt?"};
  $scope.isValidPlayerCount = function() {
 	return $scope.selectedIds.length === (4 - $scope.gameType.nonPlayerCount); 	
  };

  $scope.totalValueForPlayer = function(id) {
  	return $scope.games.reduce( function(previousValue, currentGame) {
      return previousValue + currentGame.getValueForPlayerId(id);
    }, 0);
  };

  var reset = function() {
    $scope.gameType = $scope.gameTypes[0];
    $scope.playerIds = [];
    $scope.selectedIds = $scope.playerIds.map(function(obj) {
  	  return { "id" : obj };
  	});
    $scope.runnings = 0;
    $scope.black = false;
    $scope.tailor = false;
    $scope.shots = 0;
    $scope.won = true;
    $scope.id = null;
  };

 $scope.write = function() {
 	$scope.playerIds = $scope.selectedIds.map(function(obj) {
 		return obj.id;
 	});
    if ($scope.id === null) {
      new Game(
      	$scope.session,
      	$scope.gameType, 
      	$scope.playerIds, 
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
      	$scope.playerIds, 
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
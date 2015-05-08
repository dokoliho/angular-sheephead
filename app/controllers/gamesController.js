"use strict";

app.controller("GameController", function($scope, $routeParams, Session, Game) {

  $scope.session = Session.getSession($routeParams.idSession);
  $scope.games =  Game.getGameStore();
  $scope.gameTypes = Game.AllTypes;

  var reset = function() {
    $scope.gameType = null;
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
      	$scope.type, 
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
      	$scope.type, 
      	$scope.players, 
      	$scope.won, 
      	$scope.tailor, 
      	$scope.black, 
      	$scope.runnings, 
      	$scope.shots);
    }
    reset();
  };
});
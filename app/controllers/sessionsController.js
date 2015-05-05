"use strict";

app.controller("SessionController", function($scope, Session) {
  
  $scope.sessions =  Session.getSessionStore();

  var reset = function() {
    $scope.player1 = "1";
    $scope.player2 = "2";
    $scope.player3 = "3";
    $scope.player4 = "4";
    $scope.id = null;
  };

  $scope.write = function() {
    if ($scope.id === null) {
      new Session(
        $scope.player1,
        $scope.player2,
        $scope.player3,
        $scope.player4);
    }
    else {
      var oldSession = Session.getSession($scope.id);
      oldSession.updatePlayers(
        $scope.player1,
        $scope.player2,
        $scope.player3,
        $scope.player4);
    }
    reset();
  };

  $scope.remove = function(session) {
    $scope.sessions.splice($scope.sessions.indexOf(session), 1);
  };

  $scope.edit = function(session) {
    console.log("Edit " + session.id());
  };

  reset();

});


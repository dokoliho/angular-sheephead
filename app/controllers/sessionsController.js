"use strict";

app.controller("SessionController", function($scope, $location, Session) {

  $scope.goNext = function (hash) { 
    $location.path(hash);
  };

  var activeRows = [];
  var editMode = false;
  
  $scope.isButtonRow = function(id) {
    return editMode || (activeRows.indexOf(id) > -1);
  };
  $scope.setButtonRow = function(id) {
    activeRows.push(id);
  };
  $scope.resetButtonRow = function(id) {
    activeRows.splice(activeRows.indexOf(id), 1);
  };
  $scope.toggleEdit = function() {
    editMode = !editMode;
  };


  $scope.showActions = true;


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


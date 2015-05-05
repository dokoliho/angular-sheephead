"use strict";

app.controller("GameController", function($scope, $routeParams, Session, Game) {

  $scope.session = Session.getSession($routeParams.idSession);
  $scope.gameTypes = Game.AllTypes;
  $scope.gameType = "Bitte wählen";



  $scope.games =  [
      { id: 1, session: 1, lead: [0], runnings: 0, factor: 1, won: true, kind: "SOLO" },
      { id: 2, session: 1, lead: [1, 2], runnings: 1, factor: 1, won: true, kind: "RUF" }
    ];
  

  });
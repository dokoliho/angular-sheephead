
app.controller('SessionController', function($scope, Session) {
  
  $scope.sessions =  Session.getSessionStore();

  var reset = function() {
    $scope.player1 = "1";
    $scope.player2 = "2";
    $scope.player3 = "3";
    $scope.player4 = "4";
    $scope.id = null;
  }

  $scope.write = function() {
    if ($scope.id === null) {
      var newSession = new Session(
        $scope.player1,
        $scope.player2,
        $scope.player3,
        $scope.player4);
//      $scope.sessions.push(newSession);
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
  }

  $scope.remove = function(session) {
    $scope.sessions.splice($scope.sessions.indexOf(session), 1);
  }

  $scope.edit = function(session) {

  }

  reset();

})


app.controller('GameController', function($scope, $routeParams, Session, Game) {
  $scope.games =  [
      { id: 1, session: 1, lead: [0], runnings: 0, factor: 1, won: true, kind: "SOLO" },
      { id: 2, session: 1, lead: [1, 2], runnings: 1, factor: 1, won: true, kind: "RUF" }
    ];
  $scope.types = Game.AllTypes;

  })
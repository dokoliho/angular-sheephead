
app.controller('SessionController', function($scope, Session) {
  $scope.player1 = "1";
  $scope.player2 = "2";
  $scope.player3 = "3";
  $scope.player4 = "4";
  $scope.sessions =  [];

  $scope.add = function() {
    var newSession = new Session(
      $scope.sessions.length+1, 
      $scope.player1,
      $scope.player2,
      $scope.player3,
      $scope.player4);
    $scope.sessions.push(newSession);
  }

})


app.controller('GameController', function($scope) {
  $scope.games =  [
      { id: 1, session: 1, lead: [0], runnings: 0, factor: 1, won: true, kind: "SOLO" },
      { id: 2, session: 1, lead: [1, 2], runnings: 1, factor: 1, won: true, kind: "RUF" }
    ];
  })
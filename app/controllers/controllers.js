
app.controller('SessionController', function($scope, Session) {
  $scope.sessions =  Session.sessions();
  return {
 /*     getSessions: function() {
        return sessions;
      }, */
      addSession: function() {
        Session.add([$scope.player1, $scope.player2, $scope.player3, $scope.player4]);
      }
    };
  })


app.controller('GameController', function($scope) {
  $scope.games =  [
      { id: 1, session: 1, lead: [0], runnings: 0, factor: 1, won: true, kind: "SOLO" },
      { id: 2, session: 1, lead: [1, 2], runnings: 1, factor: 1, won: true, kind: "RUF" }
    ];
  })
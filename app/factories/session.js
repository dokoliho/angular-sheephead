app.factory("Session", function($http) {

  var sessionStore = [];

  var Session = function(player1, player2, player3, player4) {

  	 var _players = [];
  	 var _id = null;
  	 var _date = null;
     var _result = {
       players: function() { return _players; },
       updatePlayers: function(player1, player2, player3, player4) {
         _players = [player1, player2, player3, player4];
       },
       printPlayers: function() { return _players.toString(); },
       date: function() { return _date; },
       printDate: function() { return _date.toLocaleDateString(); },
       id: function() { return _id; }
     };

     this.initialize = function() {
  	   _players = [player1, player2, player3, player4];
  	   _id = sessionStore.length+1;
       _date = new Date();
       sessionStore[_id-1] = _result;
     };

     this.initialize();

     return _result;
  };

  Session.getSession = function(id) {
    return sessionStore[id-1];
  }

  Session.getSessionStore = function() {
    return sessionStore;
  }

  return (Session);

});




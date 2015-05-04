app.factory("Session", function($http) {

  var sessionStore = [];

  var Session = function(player1, player2, player3, player4) {

  	 var _players = [];
  	 var _id = null;
  	 var _date = null;

     this.initialize = function() {
       var self = this;
  	   _players = [player1, player2, player3, player4];
  	   _id = sessionStore.length+1;
       _date = new Date();
       sessionStore[_id] = self;
     };

     this.initialize();

     return {
     	players: function() { return _players; },
      updatePlayers: function(player1, player2, player3, player4) {
         _players = [player1, player2, player3, player4];
       },
      printPlayers: function() { return _players.toString(); },
     	date: function() { return _date; },
      printDate: function() { return _date.toLocaleDateString(); },
     	id: function() { return _id; }
     } 
  };

  Session.getSession = function(id) {
    return sessionStore[id];
  }

  Session.getSessionStore = function() {
    return sessionStore;
  }

  return (Session);

});




app.factory("Session", function($http) {

  var Session = function(id, player1, player2, player3, player4) {

  	 var _players = [];
  	 var _id = null;
  	 var _date = null;

     this.initialize = function() {
       var self = this;
  	   _players = [player1, player2, player3, player4];
  	   _id = id;
  	   _date = new Date();
     };

     this.initialize();

     return {
     	players: function() { return _players; },
     	date: function() { return _date; }
     } 
  };

  return (Session);

});




app.factory("Game", function($http) {

  var gameStore = [];

  var Game = function(id, session, type, nonplayers, won, tailor, black, runnings, shots) {

     var BASE_VALUE = 10;
     var RUN_VALUE = 5;

  	 var _nonplayers = [];
  	 var _runnings = 0;
  	 var _black = false;
     var _tailor = false;
     var _shots = 0;
     var _lost = false;
     var _type;
     var _session;
     var _id;
     var _result = {
      getGameType: function() { return _type; },
      isWon: function() { return !_lost; },
      isTailor: function() { return _tailor; },
      isBlack: function() { return _black; },
      getRunnings: function() { return _runnings; },
      getShots: function() { return _shots; },
      getSession: function() { return _session; },
      id: function() { return _id; },
      getValue: function() { return totalValue(); }
     } 

     this.initialize = function() {
       var self = this;
       _nonplayers = nonplayers;
       _runnings = runnings;
       _black = black;
       _tailor = tailor;
       _shots = shots;
       _lost = !won;
       _type = type;
       _session = session;
  	   _id = id;
     };

     this.totalValue = function() {
       var result = _type.value * BASE_VALUE;
       if (_type.doubleable) {
         if (_tailor) result += BASE_VALUE;
         if (_black) result += BASE_VALUE; 
       }
       if (_type.runnable) {
         result += RUN_VALUE * _runnings; 
       }
       if (_type.doubleable) {
         result *= (1 + shots);
       }
       result *= _type.factor;
       return result * _type.nonPlayerCount;
     }

     this.initialize();

     return _result;
  };

  Game.AllTypes = [
    {
      "name" : "Ruf",
      "value" : 1,
      "nonPlayerCount" : 2,
      "runnable" : true,
      "doubleable" : true,
      "factor" : 1
    },
    {
      "name" : "Ramsch",
      "value" : 1,
      "nonPlayerCount" : 3,
      "runnable" : false,
      "doubleable" : false,
      "factor" : 1
    },
    {
      "name" : "Wenz",
      "value" : 2,
      "nonPlayerCount" : 3,
      "runnable" : true,
      "doubleable" : true,
      "factor" : 1
    },
    {
      "name" : "Solo",
      "value" : 2,
      "nonPlayerCount" : 3,
      "runnable" : true,
      "doubleable" : true,
      "factor" : 1
    },
    {
      "name" : "Tout",
      "value" : 2,
      "nonPlayerCount" : 3,
      "runnable" : true,
      "doubleable" : true,
      "factor" : 2
    },
    {
      "name" : "Sie",
      "value" : 2,
      "nonPlayerCount" : 3,
      "runnable" : true,
      "doubleable" : true,
      "factor" : 4
    }
  ]

  return (Game);

});




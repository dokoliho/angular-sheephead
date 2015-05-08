"use strict";

app.factory("Game", function($http) {

  var gameStore = [];

  var Game = function(session, type, players, won, tailor, black, runnings, shots) {

     var BASE_VALUE = 10;
     var RUN_VALUE = 5;

  	 var _nonplayers;
  	 var _runnings;
  	 var _black;
     var _tailor;
     var _shots;
     var _lost;
     var _type;
     var _session;
     var _id = null;
     var _result = {
       getGameType: function() { return _type; },
       isWon: function() { return !_lost; },
       isTailor: function() { return _tailor; },
       isBlack: function() { return _black; },
       getRunnings: function() { return _runnings; },
       getShots: function() { return _shots; },
       getSession: function() { return _session; },
       id: function() { return _id; },
       getValue: function() { return this.totalValue(); }
     };

     this.initialize = function() {
       _nonplayers = session.players.filter(function(p) { return players.indexOf(p) == -1; });
       _runnings = runnings;
       _black = black;
       _tailor = tailor;
       _shots = shots;
       _lost = !won;
       _type = type;
       _session = session;
  	   _id = gameStore.length+1;
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
     };

     this.initialize();

     return _result;
  };



  Game.getGame = function(id) {
    return gameStore[id-1];
  };

  Game.getGameStore = function() {
    return gameStore;
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
  ];

  return (Game);

});




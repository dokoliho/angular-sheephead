"use strict";

app.factory("Game", function($http) {

  var gameStore = [];

  var Game = function(session, type, playerIds, won, tailor, black, runnings, shots) {

     var BASE_VALUE = 10;
     var RUN_VALUE = 5;

  	 var _playerIds;
  	 var _runnings;
  	 var _black;
     var _tailor;
     var _shots;
     var _lost;
     var _type;
     var _session;
     var _id = null;

     var totalValue = function() {
       var resultingValue = _type.value * BASE_VALUE;
       if (_type.doubleable) {
         if (_tailor) resultingValue += BASE_VALUE;
         if (_black) resultingValue += BASE_VALUE; 
       }
       if (_type.runnable) {
         resultingValue += RUN_VALUE * _runnings; 
       }
       if (_type.doubleable) {
         resultingValue *= (1 + shots);
       }
       resultingValue *= _type.factor;
       return resultingValue * _type.nonPlayerCount;
     };


     var valueForPlayerId = function(playerId) {
       var resultingValue = totalValue();
       if (_playerIds.indexOf(playerId) === -1) 
         resultingValue = -resultingValue / _type.nonPlayerCount;
       else
         resultingValue = resultingValue / (4 - _type.nonPlayerCount);
       if (_lost) 
         resultingValue = -resultingValue;
       return resultingValue;
     };


     var _result = {
       getGameType: function() { return _type; },
       isWon: function() { return !_lost; },
       isTailor: function() { return _tailor; },
       isBlack: function() { return _black; },
       getRunnings: function() { return _runnings; },
       getShots: function() { return _shots; },
       getSession: function() { return _session; },
       id: function() { return _id; },
       getPlayerIds: function() { return _playerIds; },
       getValue: function() { return totalValue(); },
       getValueForPlayerId: function(id) { return valueForPlayerId(id); }
     };


     this.initialize = function() {
       _id = gameStore.length+1;
       gameStore[_id-1] = _result;
       _runnings = runnings;
       _black = black;
       _tailor = tailor;
       _shots = shots;
       _lost = !won;
       _type = type;
       _session = session;
       _playerIds = playerIds;
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





app.factory('Session', function() {
	
	var _sessions = [];
	var _index = 1;

	return {
	   sessions: function() { return _sessions },
	   add: function(playerlist) {
	      _sessions.push({ id: _index++, players: playerlist, date: new Date()});
	   }
	}
});

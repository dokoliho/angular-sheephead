'use strict';

var app = angular.module('shApp', ['ngRoute', 'ngTouch', 'angularjs-dropdown-multiselect']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      controller: 'SessionController',
      templateUrl: 'partials/sessions.html'
    })
    .when('/sessions/:idSession',
    {
      controller: 'GameController',
      templateUrl: 'partials/games.html'
    })
    .when('/sessions/:idSession/newgame',
    {
      controller: 'GameController',
      templateUrl: 'partials/newgame.html'
    })

    .otherwise( { redirectTo: '/' });
});


'use strict';

var app = angular.module('shApp', ['ngRoute']);

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
    .otherwise( { redirectTo: '/' });
});


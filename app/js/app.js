'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/Home.html', controller: 'HomeController'});
    $routeProvider.when('/locate', {templateUrl: 'partials/LocatorView.html', controller: 'LocatorController'});
    $routeProvider.when('/locations', {templateUrl: 'partials/LocationsTableView.html', controller: 'LocationsTableController'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

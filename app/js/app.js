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
    $routeProvider.when('/home', {templateUrl: 'partials/HomeView.html', controller: 'HomeController'});
    $routeProvider.when('/search-by-ip', {templateUrl: 'partials/SearchByIpView.html', controller: 'SearchByIpController'});
    $routeProvider.when('/locations', {templateUrl: 'partials/LocationsTableView.html', controller: 'LocationsTableController'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

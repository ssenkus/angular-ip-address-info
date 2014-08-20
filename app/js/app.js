'use strict';


// Declare app level module which depends on filters, and services
angular.module('IpLocatorApp', [
    'ngRoute',
    'd3',
    'IpLocatorApp.filters',
    'IpLocatorApp.services',
    'IpLocatorApp.directives',
    'IpLocatorApp.controllers',
    'ui.bootstrap'
    
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/HomeView.html',
            controller: 'HomeController'});
        $routeProvider.when('/search-by-ip', {templateUrl: 'partials/SearchByIpView.html',
            controller: 'SearchByIpController'});
        $routeProvider.when('/locations', {templateUrl: 'partials/LocationsTableView.html',
            controller: 'LocationsTableController'});
         $routeProvider.when('/traceroute', {templateUrl: 'partials/TracerouteTableView.html',
            controller: 'TracerouteController'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);




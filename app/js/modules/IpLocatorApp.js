'use strict';


// Declare app level module which depends on filters, and services
angular.module('IpLocatorApp', [
    'ngRoute',
    'ui.bootstrap'

]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/home', {templateUrl: 'views/HomeView.html',
                    controller: 'HomeCtrl'});
                $routeProvider.when('/search-by-ip', {templateUrl: 'views/SearchByIpView.html',
                    controller: 'SearchByIpCtrl'});
                $routeProvider.when('/locations', {templateUrl: 'views/LocationsTableView.html',
                    controller: 'LocationsTableCtrl'});
                $routeProvider.when('/traceroute', {templateUrl: 'views/TracerouteTableView.html',
                    controller: 'TracerouteCtrl'});
                $routeProvider.otherwise({redirectTo: '/home'});
            }]);




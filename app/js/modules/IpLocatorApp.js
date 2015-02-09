'use strict';


// Declare app level module which depends on filters, and services
angular.module('IpLocatorApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
    'angularSpinner'
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/HomeView.html',
                    controller: 'HomeCtrl'
                })
                .state('locations', {
                    url: '/locations',
                    templateUrl: 'views/LocationsLayout.html',
                    controller: 'LocationsTableCtrl'
                })
                .state('traceroute', {
                    url: '/traceroute',
                    templateUrl: 'views/TracerouteTableView.html',
                    controller: 'TracerouteCtrl'
                });

    }]);




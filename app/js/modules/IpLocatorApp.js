(function (win) {
    'use strict';

    win.IpApp = angular.module('IpLocatorApp',[
        'ngRoute',
        'ui.bootstrap',
        'ui.router',
        'angularSpinner'
    ]).config([
        '$stateProvider','$urlRouterProvider',
        function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                })
                .state('locations',{
                    url: '/locations',
                    templateUrl: 'views/locationsLayout.html',
                    controller: 'LocationsTableCtrl'
                })
                .state('traceroute',{
                    url: '/traceroute',
                    templateUrl: 'views/tracerouteTable.html',
                    controller: 'TracerouteCtrl'
                });
        }
    ]);
})(window);
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
            $stateProvider
                .state('locations',{
                    url: '/',
                    templateUrl: 'views/locationsLayout.html',
                    controller: 'LocationsTableCtrl'
                })
                .state('traceroute',{
                    templateUrl: 'views/tracerouteTable.html',
                    controller: 'TracerouteCtrl'
                });
                $urlRouterProvider.otherwise('/');
               
        }
    ]);
})(window);
(function (win) {
    'use strict';

    win.IpApp = angular.module('IpLocatorApp',[
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
                $urlRouterProvider.otherwise('/');
               
        }
    ]);
})(window);
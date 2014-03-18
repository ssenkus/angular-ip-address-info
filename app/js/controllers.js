'use strict';

/* Controllers */

angular.module('IpLocatorApp.controllers', ['d3']).
    controller('HomeController', ['$scope', '$http', 'locationHandler', 'd3Service', function($scope, $http, locationHandler, d3Service) {
        $scope.message = "Hello, World";
        $scope.d3Data = [
            {name: "Greg",
                score: 98},
            {name: "Ari",
                score: 96},
            {name: 'Q',
                score: 75},
            {name: "Loser",
                score: 48}
        ];



    }]).
    controller('SearchByIpController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.ipAddress = '';
        $scope.locations = locationHandler.locations;
        $scope.validInput = false;
        $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        $scope.myFunct = function(ev) {
            if (ev.which === 13) {
                ($scope.ipAddressMatch($scope.ipAddress)) ? $scope.getIp($scope.ipAddress) : '';
            }
        };
        $scope.ipAddressMatch = function(ip) {
            console.log($scope.inputPattern.test(ip));
            return $scope.inputPattern.test(ip);
            
        };
        
        
        
        
        
        $scope.addedTestVals = false;
        $scope.addValidIps = function() {
            if (this.addedTestVals) {
                return;
            } else {
                var newer = [
                    '52.43.90.82',
                    '14.21.124.55',
                    '22.54.76.202',
                    '24.4.76.202',
                    '24.24.24.24',
                    '84.45.22.12'
                ];
                newer.forEach($scope.getIp);
                $scope.addedTestVals = true;
                return;
            }
        };

        $scope.deleteLoc = function(idx) {
            locationHandler.locations.splice(idx, 1);
        };

        $scope.getIp = function(ip) {
            $scope.ipAddress = '';

            $http({
                method: 'GET',
                url: 'http://www.freegeoip.net/json/' + ip
            }).
                success(function(data, status, headers, config) {
                console.log('success', data);
                locationHandler.addLocation(data);
                // this callback will be called asynchronously
                // when the response is available
            }).
                error(function(data, status, headers, config) {
                console.log('error', status);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });



        };




    }]).
    controller('LocationsTableController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.locs = locationHandler.locations;
        $scope.d3Data = [
            {name: "Greg",
                score: 98},
            {name: "Ari",
                score: 96},
            {name: 'Q',
                score: 75},
            {name: "Loser",
                score: 48}
        ];


    }]);
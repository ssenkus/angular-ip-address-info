'use strict';

/* Controllers */

angular.module('IpLocatorApp.controllers', ['d3']).
    controller('HomeController', ['$scope', '$http', 'locationHandler', 'd3Service', 'whoisHandler', function($scope, $http, locationHandler, d3Service, whoisHandler) {
        $scope.message = "Hello, World";
        console.log('whoishanlder', whoisHandler)

        $scope.getWhois = whoisHandler.getWhois();
        $scope.d3Data = [
            {
                name: "This",
                score: 98
            }, {
                name: "is",
                score: 66
            }, {
                name: 'AWESOME',
                score: 75
            }, {
                name: "d3.js Stuff",
                score: 28
            }
        ];
    }]).
    controller('SearchByIpController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.ipAddress = '';
        $scope.locations = locationHandler.locations;
        $scope.validInput = false;
        $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        $scope.submitIp = function(ev) {
            if (ev.which === 13) {
                ($scope.ipAddressMatch($scope.ipAddress)) ? $scope.getIp($scope.ipAddress) : '';
            }
        };
        $scope.ipAddressMatch = function(ip) {
            console.log($scope.inputPattern.test(ip));
            return $scope.inputPattern.test(ip);
        };

        $scope.addValidIps = locationHandler.addValidIps;
        $scope.addedTestVals = locationHandler.addedTestVals;
        $scope.deleteLocation = function(ip) {
            locationHandler.deleteLocation(ip);
        };

        $scope.getIp = function(ip) {
            $scope.ipAddress = '';
            locationHandler.getIp(ip);
        };
    }]).
    controller('LocationsTableController', ['$scope', '$http', 'locationHandler', 'd3Service', 'topojsonService', 'whoisHandler', function($scope, $http, locationHandler, d3Service, topojsonService, whoisHandler) {
        $scope.locs = locationHandler.locations;
        $scope.$watch('reports', function() {
            console.log('reports updated')
            console.log('$scope.reports', $scope.reports)
        }, true); 


        $scope.getWhois = function(ip) {
            whoisHandler.getWhois(ip).then(function(promise) {
                $scope.reports = promise.data;
                console.log('promise', promise)

            });
        }
        $scope.reports = [{regIntReg: 'test', data: 'test data'}];

    }]);
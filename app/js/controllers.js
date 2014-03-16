'use strict';

/* Controllers */

angular.module('IpLocatorApp.controllers', []).
    controller('HomeController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.message = "Hello, World";

    }]).
    controller('SearchByIpController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.ipAddress;
        $scope.ips = [];
        $scope.ipAddress = null;
        $scope.locations = locationHandler.locations;
        $scope.validInput = false;
        $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        $scope.myFunct = function(ev) {
            if (ev.which === 13)
                ($scope.ipAddressMatch($scope.ipAddress)) ? $scope.getIp($scope.ipAddress) : '';
        }
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
                newer.concat($scope.ips);
                newer.forEach($scope.getIp);
                $scope.addedTestVals = true;
                return;
            }
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



        }




    }]).
    controller('LocationsTableController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
        $scope.locs = locationHandler.locations;



    }]);
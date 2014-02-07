'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LocatorController', ['$scope', '$http', function($scope, $http) {



   $scope.ipAddress;
    $scope.ips = [];
    $scope.locations = [];

    $scope.myFunct = function (ev) {
        if (ev.which == 13) $scope.getIp($scope.ipAddress)
    }

    $scope.addedTestVals = false;
    $scope.addValidIps = function () {
        if (this.addedTestVals) {
            return;
        } else {
            var newer = [
                '50.43.90.82',
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
    $scope.getIp = function (ip) {
        $http({
            method: 'GET',
            url: 'http://www.freegeoip.net/json/' + ip
        }).
        success(function (data, status, headers, config) {
            console.log('success', data);

            $scope.locations.push(data)
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function (data, status, headers, config) {
            console.log('error', status);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });



    }




  }])
  .controller('MyCtrl2', [function() {

  }]);
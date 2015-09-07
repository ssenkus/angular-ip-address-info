IpApp.controller('SearchByIpCtrl',
    ['$scope','$http','locationCollection',
        function ($scope,$http,locationCollection) {
            $scope.ipAddress = '';
            $scope.locations = locationCollection.getLocations();
            $scope.validInput = false;
            $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
            $scope.submitIp = function (ev) {
                if (ev.which === 13) {
                    ($scope.ipAddressMatch($scope.ipAddress)) ? $scope.getIp($scope.ipAddress) : '';
                }
            };
            $scope.ipAddressMatch = function (ip) {
                console.log($scope.inputPattern.test(ip));
                return $scope.inputPattern.test(ip);
            };

            $scope.addValidIps = locationCollection.addValidIps;
            $scope.addedTestVals = locationCollection.addedTestVals;
            $scope.deleteLocation = function (ip) {
                locationCollection.deleteLocation(ip);
            };
            $scope.getWhoisReports = function (ip) {
                locationCollection.getWhois(ip).then(
                    function (response) {
                        console.log('locations',$scope.locations,arguments);
                        locationCollection.addWhoisDataToLocation(ip,response.data)
                    },
                    function () {
                    });
                console.log('asdfad',ip);
            };
            $scope.getIp = function (ip) {
                $scope.ipAddress = '';
                locationCollection.getIp(ip);
            };

            $scope.addDemoIpAddresses = function () {
                locationCollection.addDemoIpAddresses();
            };

            $scope.addRandomIpAddresses = function () {
                locationCollection.addRandomIpAddresses();

            };
        }
    ]);
IpApp.controller('SearchByIpCtrl',
    ['$scope','locationCollection',
        function ($scope,locationCollection) {

            var KEY_CODE = {
                ENTER: 13
            };

            $scope.ipAddress = '';
            $scope.locations = locationCollection.getLocations();
            $scope.validInput = false;
            $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

            $scope.initialize = function () {
            };

            $scope.ipAddressMatch = function (ip) {
                return $scope.inputPattern.test(ip);
            };

            $scope.submitIp = function (ev) {
                if (ev.which === KEY_CODE.ENTER) {
                    if ($scope.ipAddressMatch($scope.ipAddress)) {
                        $scope.getIp($scope.ipAddress);
                    }
                }
            };

            $scope.addValidIps = function () {
                locationCollection.addValidIps();
            };

            $scope.addedTestVals = function () {
                locationCollection.addedTestVals();
            };

            $scope.deleteLocation = function (ip) {
                locationCollection.deleteLocation(ip);
            };

            $scope.getWhoisReports = function (ip) {
                locationCollection.getWhois(ip).then(
                    function (response) {
                        locationCollection.addWhoisDataToLocation(ip,response.data);
                    },
                    function (error) {
                        console.log(error);
                    });
            };

            $scope.getIp = function (ip) {
                locationCollection.getIp($scope.ipAddress);
                $scope.ipAddress = '';
            };

            $scope.addDemoIpAddresses = function () {
                locationCollection.addDemoIpAddresses();
            };

            $scope.addRandomIpAddresses = function () {
                locationCollection.addRandomIpAddresses();
            };
        }
    ]);
IpApp.controller('SearchByIpCtrl',
    ['$scope','locationCollection',
        function ($scope,locationCollection) {

            var KEY_CODE = {
                ENTER: 13
            };

            $scope.ipAddress = '';
            $scope.locations = [];
            $scope.validInput = false;
            $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

            $scope.initialize = function () {
                $scope.locations = locationCollection.getLocations();
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

            $scope.addedDemoIpAddresses = false;

            $scope.deleteLocation = function (ip) {
                locationCollection.deleteLocation(ip);
            };

            $scope.getIp = function (ip) {
                locationCollection.getIp($scope.ipAddress);
                $scope.ipAddress = '';
            };

            $scope.addDemoIpAddresses = function () {
                locationCollection.addDemoIpAddresses();
                $scope.addedDemoIpAddresses = true;
            };

            $scope.addRandomIpAddresses = function () {
                locationCollection.addRandomIpAddresses();
            };
        }
    ]);
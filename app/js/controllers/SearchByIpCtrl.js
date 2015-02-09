angular.module('IpLocatorApp').controller('SearchByIpCtrl',
        ['$scope', '$http', 'locationHandler',
            function ($scope, $http, locationHandler) {
                $scope.ipAddress = '';
                $scope.locations = locationHandler.getLocations();
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

                $scope.addValidIps = locationHandler.addValidIps;
                $scope.addedTestVals = locationHandler.addedTestVals;
                $scope.deleteLocation = function (ip) {
                    locationHandler.deleteLocation(ip);
                };
                $scope.getWhoisReports = function(ip) {
                    locationHandler.getWhois(ip).then(
                            function(response) {
                                console.log('locations', $scope.locations, arguments);
                                locationHandler.addWhoisDataToLocation(ip, response.data)
                            }, 
                            function() {});
                    console.log('asdfad', ip);
                };
                $scope.getIp = function (ip) {
                    $scope.ipAddress = '';
                    locationHandler.getIp(ip);
                };
            }
        ]);
IpApp.controller('TracerouteCtrl',
        ['$scope', 'tracerouteManager', 'locationCollection',
            function ($scope, tracerouteManager, locationCollection) {
                $scope.routes = [];
                $scope.getTracerouteData = function () {
                    tracerouteManager.getTraceroute().then(function (resp) {
                        console.log('dsfsdfsdf', resp.data);
                        $scope.routes = resp.data.data;
                        console.log('$scope.routes', $scope.routes);
                    });
                };
                
                $scope.addIpAddressToLocations = function(ip) {
                    locationCollection.getIp(ip);
                };
                
            }]
        );
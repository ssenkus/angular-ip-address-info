angular.module('IpLocatorApp').controller('TracerouteCtrl',
        ['$scope', 'tracerouteManager',
            function ($scope, tracerouteManager) {
                $scope.routes = [];
                $scope.getTracerouteData = function () {
                    tracerouteManager.getTraceroute().then(function (resp) {
                        console.log('dsfsdfsdf', resp.data);
                        $scope.routes = resp.data.data;
                        console.log('$scope.routes', $scope.routes);
                    });
                };
            }]
        );
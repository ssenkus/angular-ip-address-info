angular.module('IpLocatorApp').controller('LocationsTableCtrl',
        ['$scope', 'locationHandler', '$modal',
            function ($scope, locationHandler, $modal) {
                $scope.locations = [];
                $scope.tabs = [];
                $scope.$watch('reports', function () {
                    console.log('reports updated')
                    console.log('$scope.reports', $scope.reports);
                }, true);

                $scope.deleteLoc = function (idx) {
                    locationHandler.deleteLocation(idx);
                };

                $scope.getWhois = function (ip) {

                    var modalInstance = $modal.open({
                        templateUrl: 'views/modals/WhoisModalView.html',
                        controller: 'WhoisModalCtrl',
                        size: 'lg',
                        resolve: {
                            ip: function () {
                                return ip;
                            },
                            tabs: function () {
                                return $scope.tabs;
                            }
                        }
                    });
                };

                $scope.locations = locationHandler.getLocations();
                
                console.log('locs',locationHandler.getLocations());

            }]);
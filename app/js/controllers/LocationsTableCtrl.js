angular.module('IpLocatorApp').controller('LocationsTableCtrl',
    ['$scope','locationCollection','$modal',
        function ($scope,locationCollection,$modal) {
            $scope.locations = [];
            $scope.tabs = [];
            $scope.$watch('reports',function () {
                console.log('reports updated');
                console.log('$scope.reports',$scope.reports);
            },true);

            $scope.deleteLoc = function (idx) {
                locationCollection.deleteLocation(idx);
            };
            $scope.hasLocations = function () {
                return $scope.locations.length > 0;
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


            $scope.initialize = function () {
                $scope.locations = locationCollection.getLocations();
            };
        }]);
IpApp.controller('LocationsTableCtrl',
    ['$scope','locationCollection','modalManager',
        function ($scope,locationCollection,modalManager) {
            $scope.locations = [];
            $scope.tabs = [];

            $scope.initialize = function () {
                locationCollection.getUserLocation();
                $scope.locations = locationCollection.getLocations();
            };

            $scope.deleteLoc = function (index) {
                locationCollection.deleteLocation(index);
            };
            $scope.hasLocations = function () {
                return $scope.locations.length > 0;
            };

            $scope.getWhois = function (ip) {
                modalManager.openWhoIsModal({
                    ip: ip,
                    tabs: $scope.tabs
                });
            };

            $scope.showLocationModal = function (location) {
                modalManager.openLocationModal({
                    location: location
                });
            };
            $scope.getHostByAddr = function(ip) {
                locationCollection.getHostByAddr(ip).then(function(d) { alert(d)},function() {});
            };
        }
    ]);
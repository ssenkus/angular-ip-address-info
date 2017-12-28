IpApp.controller('HomeCtrl',
    ['$scope', 'locationCollection',
        function ($scope, locationCollection) {
            $scope.locations = [];

            $scope.initialize = function () {
                locationCollection.getUserLocation();
                $scope.locations = locationCollection.getLocations();
            };

        }]
);
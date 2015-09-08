IpApp.controller('HomeCtrl',
        ['$scope', 'locationCollection',
            function ($scope, locationCollection) {
                $scope.locations = [];
                locationCollection.getUserLocation();
                $scope.locations = locationCollection.getLocations();
                
            }]
        );
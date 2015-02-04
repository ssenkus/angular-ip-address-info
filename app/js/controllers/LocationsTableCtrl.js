angular.module('IpLocatorApp').controller('LocationsTableCtrl', ['$scope', '$http', 'locationHandler', 'd3Service', 'topojsonService', 'whoisHandler', '$modal', function ($scope, $http, locationHandler, d3Service, topojsonService, whoisHandler, $modal) {
        $scope.locs = locationHandler;
        $scope.tabs = [
        ];
        $scope.$watch('reports', function () {
            console.log('reports updated')
            console.log('$scope.reports', $scope.reports)
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

//                    whoisHandler.getWhois(ip).then(function(promise) {
//                        $scope.reports = promise.data;
//                        console.log('promise', promise)
//                        $scope.tabs = [];
//                        for (var report in promise.data) {
//
//
//                            $scope.tabs.push({title: promise.data[report].regIntReg, content: promise.data[report].data})
//                            console.log('$scope.tabs', $scope.tabs);
//                        }
//
//                    });
        };
        $scope.reports = [{regIntReg: 'test', data: 'test data'}];

    }]);
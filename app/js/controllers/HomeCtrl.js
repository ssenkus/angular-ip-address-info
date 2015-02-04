angular.module('IpLocatorApp').controller('HomeCtrl',
        ['$scope', '$http', 'locationHandler', 'd3Service', 'whoisHandler',
            function ($scope, $http, locationHandler, d3Service, whoisHandler) {
                $scope.message = "Hello, World";
                console.log('whoishanlder', whoisHandler)

                $scope.getWhois = whoisHandler.getWhois();
                $scope.d3Data = [
                    {
                        name: "This",
                        score: 98
                    }, {
                        name: "is",
                        score: 66
                    }, {
                        name: 'AWESOME',
                        score: 75
                    }, {
                        name: "d3.js Stuff",
                        score: 28
                    }
                ];
            }]
        );
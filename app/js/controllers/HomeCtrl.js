angular.module('IpLocatorApp').controller('HomeCtrl',
        ['$scope',
            function ($scope) {
                $scope.message = "Hello, World";
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
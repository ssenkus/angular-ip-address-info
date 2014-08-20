'use strict';

/* Controllers */

angular.module('IpLocatorApp.controllers', ['d3', 'ui.bootstrap'])
        .controller('HomeController', ['$scope', '$http', 'locationHandler', 'd3Service', 'whoisHandler', function($scope, $http, locationHandler, d3Service, whoisHandler) {
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
            }])
        .controller('SearchByIpController', ['$scope', '$http', 'locationHandler', function($scope, $http, locationHandler) {
                $scope.ipAddress = '';
                $scope.locations = locationHandler.locations;
                $scope.validInput = false;
                $scope.inputPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
                $scope.submitIp = function(ev) {
                    if (ev.which === 13) {
                        ($scope.ipAddressMatch($scope.ipAddress)) ? $scope.getIp($scope.ipAddress) : '';
                    }
                };
                $scope.ipAddressMatch = function(ip) {
                    console.log($scope.inputPattern.test(ip));
                    return $scope.inputPattern.test(ip);
                };

                $scope.addValidIps = locationHandler.addValidIps;
                $scope.addedTestVals = locationHandler.addedTestVals;
                $scope.deleteLocation = function(ip) {
                    locationHandler.deleteLocation(ip);
                };

                $scope.getIp = function(ip) {
                    $scope.ipAddress = '';
                    locationHandler.getIp(ip);
                };
            }])
        .controller('LocationsTableController', ['$scope', '$http', 'locationHandler', 'd3Service', 'topojsonService', 'whoisHandler', '$modal', function($scope, $http, locationHandler, d3Service, topojsonService, whoisHandler, $modal) {
                $scope.locs = locationHandler;
                $scope.tabs = [
                ];
                $scope.$watch('reports', function() {
                    console.log('reports updated')
                    console.log('$scope.reports', $scope.reports)
                }, true);

                $scope.deleteLoc = function(idx) {
                    locationHandler.deleteLocation(idx);
                };

                $scope.getWhois = function(ip) {

                    var modalInstance = $modal.open({
                        templateUrl: 'partials/modals/WhoisModalView.html',
                        controller: 'ModalInstanceCtrl',
                        size: 'lg',
                        resolve: {
                            ip: function() {
                                return ip;
                            },
                            tabs: function() {
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

            }]).
        controller('TracerouteController', ['$scope', 'TracerouteService', function($scope, TracerouteService) {
                $scope.routes = [];
                $scope.getTracerouteData = function() {
                    TracerouteService.getTraceroute().then(function(resp) {
                        console.log('dsfsdfsdf', resp.data);
                        $scope.routes = resp.data.data;
                        console.log('$scope.routes', $scope.routes);
                    });
                };
            }])
        .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'whoisHandler', 'ip', 'tabs', function($scope, $modalInstance, whoisHandler, ip, tabs) {
                $scope.items = [0, 1, 2, 3]
                $scope.reports = [];
                $scope.tabs = tabs;
                $scope.ip = ip;
//                $scope.ip = '123.123.123.123';
                $scope.selected = {
                    item: $scope.items[0]
                };

                whoisHandler.getWhois($scope.ip).then(function(promise) {
                    $scope.reports = promise.data;
                    $scope.tabs = [];
                    for (var report in promise.data) {
                        $scope.tabs.push({title: promise.data[report].regIntReg, content: promise.data[report].data})
                    }
                });


                $scope.ok = function() {
                    $modalInstance.close($scope.selected.item);
                };

                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
            }]);

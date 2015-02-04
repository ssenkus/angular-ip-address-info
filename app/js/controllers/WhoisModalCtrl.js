angular.module('IpLocatorApp').controller('WhoisModalCtrl',
        ['$scope', '$modalInstance', 'whoisHandler', 'ip', 'tabs',
            function ($scope, $modalInstance, whoisHandler, ip, tabs) {
                $scope.items = [0, 1, 2, 3]
                $scope.reports = [];
                $scope.tabs = tabs;
                $scope.ip = ip;

                $scope.selected = {
                    item: $scope.items[0]
                };

                whoisHandler.getWhois($scope.ip).then(function (promise) {
                    $scope.reports = promise.data;
                    $scope.tabs = [];
                    for (var report in promise.data) {
                        $scope.tabs.push({title: promise.data[report].regIntReg, content: promise.data[report].data})
                    }
                });


                $scope.ok = function () {
                    $modalInstance.close($scope.selected.item);
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]
        );
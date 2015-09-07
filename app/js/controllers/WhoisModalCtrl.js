IpApp.controller('WhoisModalCtrl',
        ['$scope', '$modalInstance', 'locationCollection', 'ip', 'tabs', 'usSpinnerService',
            function ($scope, $modalInstance, locationCollection, ip, tabs, usSpinnerService) {
                $scope.items = [0, 1, 2, 3];
                $scope.reports = [];
                $scope.tabs = tabs;
                $scope.ip = ip;
                console.log(arguments);
                $scope.selected = {
                    item: $scope.items[0]
                };

                locationCollection.getWhois($scope.ip).then(function (data) {

                    locationCollection.addWhoisDataToLocation($scope.ip, data);
                    $scope.reports = data;
                    $scope.tabs = [];
                    for (var report in $scope.reports) {
                        $scope.tabs.push({title: $scope.reports[report].regIntReg, content: $scope.reports[report].data})
                    }
                    usSpinnerService.stop('whois-spinner')
                });

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]
        );
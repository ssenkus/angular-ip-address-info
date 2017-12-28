IpApp.controller('WhoisModalCtrl',
    ['$scope', '$modalInstance', 'locationCollection', 'usSpinnerService', 'ip', 'tabs',
        function ($scope, $modalInstance, locationCollection, usSpinnerService, ip, tabs) {
            $scope.items = [0, 1, 2, 3];
            $scope.reports = [];
            $scope.ip = ip;
            $scope.selected = {
                item: $scope.items[0]
            };

            locationCollection.getWhois(ip).then(function (response) {
                locationCollection.addWhoisDataToLocation(ip, response.data);

                console.log(response);
                var report = response.data.result;

                $scope.content = report;

                usSpinnerService.stop('whois-spinner');
            });

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]
);
IpApp.controller('WhoisModalCtrl',
    ['$scope', '$modalInstance', 'locationCollection', 'usSpinnerService', 'ip',
        function ($scope, $modalInstance, locationCollection, usSpinnerService, ip) {
            $scope.m = {
                ip: ip,
                content: null
            };

            locationCollection.getWhois(ip).then(
                function (response) {
                    locationCollection.addWhoisDataToLocation(ip, response.data);
                    $scope.m.content = response.data.result;
                    usSpinnerService.stop('whois-spinner');
                }, function () {
                    alert('There was an error while requesting WHOIS data.');
                });

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]
);
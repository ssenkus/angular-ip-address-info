IpApp.controller('WhoisModalCtrl',
    ['$scope','$modalInstance','locationCollection','usSpinnerService','ip','tabs',
        function ($scope,$modalInstance,locationCollection,usSpinnerService,ip,tabs) {
            $scope.items = [0,1,2,3];
            $scope.reports = [];
            $scope.ip = ip;
            $scope.tabs = tabs;


            $scope.selected = {
                item: $scope.items[0]
            };

            locationCollection.getWhois($scope.ip).then(function (response) {
                locationCollection.addWhoisDataToLocation($scope.ip, response.data);
                $scope.reports = response.data;
                
                for (var report in $scope.reports) {
                    $scope.tabs.push({title: $scope.reports[report].regIntReg,content: $scope.reports[report].data})
                }
                
                usSpinnerService.stop('whois-spinner');
            });

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]
    );
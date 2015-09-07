IpApp.controller('LocationModalCtrl',
    ['$scope','$modalInstance','location',
        function ($scope,$modalInstance,location) {
            $scope.location = location;

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]
    );
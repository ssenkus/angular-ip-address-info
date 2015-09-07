IpApp.controller('MenuCtrl',
    ['$scope','$state',
        function ($scope,$state) {

            $state.go('locations');
            
            $scope.toggleMenu = function ($event) {
                $event.preventDefault();
                $("#wrapper").toggleClass("toggled");
            };

        }]);


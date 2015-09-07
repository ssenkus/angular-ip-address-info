IpApp.controller('MenuCtrl',
    ['$scope',
        function ($scope) {

            $scope.toggleMenu = function ($event) {
                $event.preventDefault();
                $("#wrapper").toggleClass("toggled");
            };

        }]);


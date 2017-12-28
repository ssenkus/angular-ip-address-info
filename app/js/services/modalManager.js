IpApp.factory('modalManager', [
    '$modal',
    function ($modal) {

        return {
            openWhoIsModal: function (options) {
                $modal.open({
                    templateUrl: 'views/modals/whoIsModal.html',
                    controller: 'WhoisModalCtrl',
                    size: 'lg',
                    resolve: {
                        ip: function () {
                            return options.ip;
                        }
                    }
                });
            },
            openLocationModal: function (options) {
                $modal.open({
                    templateUrl: 'views/modals/locationModal.html',
                    controller: 'LocationModalCtrl',
                    size: 'lg',
                    resolve: {
                        location: function () {
                            return options.location;
                        }
                    }
                });
            }
        };
    }
]);
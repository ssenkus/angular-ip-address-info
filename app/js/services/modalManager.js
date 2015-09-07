IpApp.factory('modalManager',[
    '$modal',
    function ($modal) {

        var modalManager = {
            openWhoIsModal: function (options) {
                $modal.open({
                    templateUrl: 'views/modals/whoIsModal.html',
                    controller: 'WhoisModalCtrl',
                    size: 'lg',
                    resolve: {
                        ip: function () {
                            return options.ip;
                        },
                        tabs: function () {
                            return options.tabs;
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




        return modalManager;
    }]);
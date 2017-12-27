IpApp.factory('ipAddressRepository', ['$http',
    function ($http) {

        return {
            getIpInfo: function (ip) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8080/api/v1/ipaddress/' + ip
                }).then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
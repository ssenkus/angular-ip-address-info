IpApp.factory('ipAddressRepository', ['$http',
    function ($http) {

        return {
            getIpInfo: function (ip) {
                console.log(ip);
                return $http({
                    method: 'GET',
                    url:  window.location.protocol + '//' + window.location.host +  '/api/v1/ipaddress/' +  ip// 'http://localhost:8080/api/v1/ipaddress/' + ip
                }).then(function (response) {
                    console.log('RESPONSE', response);
                    return response.data;
                });
            }
        };
    }
]);
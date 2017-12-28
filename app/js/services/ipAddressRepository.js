IpApp.factory('ipAddressRepository', ['$http',
    function ($http) {

        return {
            getIpInfo: function (ip) {
                return $http({
                    method: 'GET',
                    url:  window.location.protocol + '//' + window.location.host +  '/api/v1/ipaddress/' +  ip// 'http://localhost:8080/api/v1/ipaddress/' + ip
                }).then(function (response) {
                    console.log('RESPONSE', response);
                    return response.data;
                }, function () {
                    console.log('ERRRR', arguments);

                });
            },
            getDomainInfo: function (domain) {
                console.log('got here');
                return $http({
                    method: 'GET',
                    url:  window.location.protocol + '//' + window.location.host +  '/api/v1/ipaddress/' +  domain
                }).then(function (response) {
                    console.log('RESPONSE', response);
                    return response.data;
                }, function () {
                    console.log('ERRRR', arguments);

                });

            }
        };
    }
]);
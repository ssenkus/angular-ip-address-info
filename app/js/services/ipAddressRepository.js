IpApp.factory('ipAddressRepository', ['$http', function($http) {
        
        var ipAddressRepository = {
            getIpInfo: function(ip) {
                return $http({
                    method: 'GET',
                    //url: 'http://www.freegeoip.net/json/' + ip
                    url: 'http://localhost:8080/json/' + ip
                }).then(function(response) {
                    return response.data;
                });
            },
            getHostByAddr: function(ip) {
                return $http({
                    method: 'GET',
                    url: '/api/gethostbyaddr.php',
                    params: {
                        ip: ip
                    }
                });
            }
           
        };
        
        return ipAddressRepository;
        
}]);
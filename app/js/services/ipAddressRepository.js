IpApp.factory('ipAddressRepository', ['$http', function($http) {
        
        var ipAddressRepository = {
            getIpInfo: function(ip) {
                return $http({
                    method: 'GET',
                    url: 'http://www.freegeoip.net/json/' + ip
                }).then(function(response) {
                    return response.data;
                });
            }
           
        };
        
        
        
        
        
        return ipAddressRepository;
        
}]);
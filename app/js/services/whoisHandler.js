angular.module('IpLocatorApp').factory('whoisHandler', function ($http) {
    return {
        addReports: function (report) {
            this.whoisReports = report;
        },
        getWhois: function (ip) {
            var target = 'api/whois.php';
            var promise = $http({
                method: 'GET',
                url: target,
                params: {
                    whois_domain: ip
                }
            })
                    .success(function (data, status, headers, config) {
                        console.log('got whois data', data)

                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        return {"status": false};
                    });
            return promise;
        }
    }
});
angular.module('IpLocatorApp').factory('locationHandler', ['$http', function ($http) {

        var locations = [];
        var addedTestVals = false;

        function addLocation(location) {
            if (location.city === "") {
                location.locStatus = "warn";
            } else {
                location.locStatus = "ok";
            }
            locations.push(location);
        }


        return {
            addLocation: function (location) {
                if (location.city === "") {
                    location.locStatus = "warn";
                } else {
                    location.locStatus = "ok";
                }
                locations.push(location);
            },
            deleteLocation: function (index) {
                locations.splice(index, 1);
            },
            addValidIps: function () {
                if (addedTestVals) {
                    return;
                } else {
                    var newer = [
                        '50.43.90.82',
                        '71.193.202.188',
                        '209.68.11.55',
                        '14.21.124.55',
                        '22.54.76.202',
                        '24.4.76.202',
                        '24.24.24.24',
                        '84.45.22.12'
                    ];
                    newer.forEach(this.getIp);
                    addedTestVals = true;
                    return;
                }
            },
            getIp: function (ip) {
                $http({
                    method: 'GET',
                    url: 'http://www.freegeoip.net/json/' + ip
                }).
                        success(function (data, status, headers, config) {
                            console.log('success', data);
                            addLocation(data);
                        }).
                        error(function (data, status, headers, config) {
                            console.log('error', status);
                        });
            },
            getLocations: function () {
                return locations;
            },
            addWhoisDataToLocation: function(ip, whoisData) {
                console.log(_.findWhere(locations, {'ip': ip}));
                var location = _.findWhere(locations, {'ip': ip});
                location.whoisData = whoisData;
                console.log('location!', location);
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
        };
    }]);
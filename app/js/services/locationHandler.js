   
       angular.module('IpLocatorApp').service('locationHandler', function($http) {
            var that = this;
            this.locations = [];
            this.addLocation = function(location) {
                console.log('location', location);
                if (location.city === "") {
                    location.locStatus = "warn";
                } else {
                    location.locStatus = "ok";
                }

                this.locations.push(location);
                console.log('added location', this.locations);
            };
            this.deleteLocation = function(idx) {
                this.locations.splice(idx, 1);
            };
            this.addedTestVals = false;
            this.addValidIps = function() {
                if (this.addedTestVals) {
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
                    this.addedTestVals = true;
                    return;
                }
            };
            this.getIp = function(ip) {
                $http({
                    method: 'GET',
                    url: 'http://www.freegeoip.net/json/' + ip
                }).
                        success(function(data, status, headers, config) {
                            console.log('success', data);
                            that.addLocation(data);
                        }).
                        error(function(data, status, headers, config) {
                            console.log('error', status);
                        });
            };
        });
'use strict';
/* Services */
angular.module('IpLocatorApp.services', []).
        factory('TracerouteService', ['$http', function($http) {
                return {
                    getTraceroute: function() {

                        var target = 'api/traceroute.php';
                        console.log(target);
                        var promise = $http({
                            method: 'GET',
                            url: target,
//                            params: {
//                                whois_domain: ip
//                            }
                        })
                                .success(function(data, status, headers, config) {
                                    console.log('got traceroute data', data)

                                    return data;
                                })
                                .error(function(data, status, headers, config) {
                                    console.log('errror in traceroute');
                                    return {"status": false};
                                });
                        return promise;
                    }

                };

            }]).
        factory('whoisHandler', function($http) {
            return {
                addReports: function(report) {
                    this.whoisReports = report;
                },
                getWhois: function(ip) {
                    console.log(ip)
                    var target = 'api/whois.php';
                    console.log(target);
                    var promise = $http({
                        method: 'GET',
                        url: target,
                        params: {
                            whois_domain: ip
                        }
                    })
                            .success(function(data, status, headers, config) {
                                console.log('got whois data', data)

                                return data;
                            })
                            .error(function(data, status, headers, config) {
                                return {"status": false};
                            });
                    return promise;
                }
            }
        }).
        service('locationHandler', function($http) {
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
'use strict';
angular.module('IpLocatorApp').
        factory('tracerouteManager', ['$http', function ($http) {
                return {
                    getTraceroute: function () {

                        var target = 'api/traceroute.php';
                        console.log(target);
                        var promise = $http({
                            method: 'GET',
                            url: target,
//                            params: {
//                                whois_domain: ip
//                            }
                        })
                                .success(function (data, status, headers, config) {
                                    console.log('got traceroute data', data)

                                    return data;
                                })
                                .error(function (data, status, headers, config) {
                                    console.log('errror in traceroute');
                                    return {"status": false};
                                });
                        return promise;
                    }

                };

            }])
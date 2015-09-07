IpApp.factory('locationCollection',
    ['$http','$q','ipAddressRepository','$window',
        function ($http,$q,ipAddressRepository,$window) {

            var locations = [];
            var demoLocations = [
                '50.43.90.82',
                '107.170.178.153',
                '71.193.202.188',
                '209.68.11.55',
                '14.21.124.55',
                '22.54.76.202',
                '24.4.76.202',
                '24.24.24.24',
                '84.45.22.12'];

            var addedTestVals = false;

            var userIp = null;

            function addLocation(location) {
                if (location.city === "") {
                    location.locStatus = "warn";
                } else {
                    location.locStatus = "ok";
                }
                locations.push(location);
            }


            function randomiseNumbers(t,e,r,n) {
                var i = e - t + 1,
                    o = [];
                if (n) {
                    for (var s = 0; r > s; s++) {
                        o[s] = t + Math.floor(Math.random() * i);
                    }
                    return o;
                }
                for (var a = 1,
                    s = 0; i > s; s++) {
                    a = (r - o.length) / (i - s),Math.random() <= a && o.push(s + t);
                }
                return randomise(o,r,n);
            }

            function randomise(t,e,r) {
                if ([].isArray(t) || (t = t.split("")),t.shuffle(),r) {
                    for (var n = [],
                        i = 0; e > i; i++) {
                        n[i] = t[Math.floor(Math.random() * t.length)];
                    }
                    return n
                }
                return e > 0 && e < t.length && (t.length = e),t
            }

            var locationCollection = {
                addLocation: function (location) {
                    if (location.city === "") {
                        location.locStatus = "warn";
                    } else {
                        location.locStatus = "ok";
                    }
                    locations.push(location);
                },
                deleteLocation: function (index) {
                    locations.splice(index,1);
                },
                getIp: function (ip) {
                    return ipAddressRepository.getIpInfo(ip)
                        .then(function (data) {
                            addLocation(data);
                        },function (data,status,headers,config) {
                            console.log('error',status);
                        });
                },
                getLocations: function () {
                    return locations;
                },
                addWhoisDataToLocation: function (ip,whoisData) {
                    var location = _.findWhere(locations,{'ip': ip});
                    location.whoisData = whoisData;
                },
                getWhois: function (ip) {
                    var defer = $q.defer();
                    var target = 'api/whois.php';

                    var foundLocation = _.findWhere(locations,{ip: ip});

                    if (foundLocation && foundLocation.whoisData) {
                        var selected = _.findWhere(locations,{ip: ip});
                        defer.resolve(selected.whoisData);

                    } else {
                        $http({
                            method: 'GET',
                            url: target,
                            params: {
                                whois_domain: ip
                            }
                        })
                            .then(function (data) {
                                defer.resolve(data);
                            },function (data,status,headers,config) {
                                defer.resolve({"status": false});
                            });
                    }
                    return defer.promise;
                },
                addDemoIpAddresses: function () {
                    if (addedTestVals) {
                        return;
                    }
                    demoLocations.forEach(this.getIp);
                    addedTestVals = true;
                },
                addRandomIpAddresses: function (opts) {
                    var options = opts || {},
                        qty = options.quantity || 10,
                        randomIps = [],
                        r = randomiseNumbers(0,255,4 * qty,true),
                        i;

                    for (i = 0; i < r.length; i += 4) {
                        var ip = r[i] + "." + r[i + 1] + "." + r[i + 2] + "." + r[i + 3];
                        randomIps.push(ip);
                    }

                    randomIps.forEach(this.getIp);
                },
                getUserLocation: function () {
                    return _.findWhere(locations,{
                        ip: userIp
                    });
                },
                initialize: function () {
                    var self = this;
                    function getUserIp() {
                        return $http.jsonp('https://api.ipify.org/?format=jsonp&callback=JSON_CALLBACK').then(function (response) {
                            userIp = response.data.ip;
                            console.log(this);
                            self.getIp(userIp);
                        },function () {
                            console.log('ERROR',arguments);
                        });
                    }

                    getUserIp();

                }
            };
            locationCollection.initialize();

            return locationCollection;
        }]);
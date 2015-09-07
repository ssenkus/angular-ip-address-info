'use strict';
IpApp.factory('tracerouteManager',[
    '$http',
    function ($http) {
        return {
            getTraceroute: function () {

                var target = 'api/traceroute.php';
                var promise = $http({
                    method: 'GET',
                    url: target
                })
                    .success(function (data,status,headers,config) {
                        return data;
                    })
                    .error(function (data,status,headers,config) {
                        console.log('errror in traceroute');
                        return {"status": false};
                    });
                return promise;
            }

        };
    }
]);
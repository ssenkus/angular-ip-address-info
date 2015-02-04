angular.module('IpLocatorApp').directive('worldMap',
        ['$window', '$timeout', 'd3Service',
            function ($window, $timeout, d3Service) {
                return {
                    restrict: 'A',
                    scope: {
                        data: '=',
                        label: '@',
                        onClick: '&'
                    },
                    link: function (scope, ele, attrs) {
                        d3Service.d3().then(function (d3) {
                            var renderTimeout;
                            var width = 940,
                                    height = 500;
                            var projection = d3.geo.equirectangular();
                            var color = d3.scale.category20c();
                            var path = d3.geo.path()
                                    .projection(projection);
                            var svg = d3.select(ele[0]).append("svg")
                                    .attr("width", width)
                                    .attr("height", height).style('background-color', '#009');
                            scope.$watch('data', function (newData) {
                                scope.render(newData);
                            }, true);
                            scope.render = function (data) {
                                svg.selectAll('circle').remove();
                                if (!data)
                                    return;
                                console.log('data', data)
                                if (renderTimeout)
                                    clearTimeout(renderTimeout);
                                renderTimeout = $timeout(function () {
                                    d3.json("data/readme-world.json", function (error, world) {
                                        var countries = topojson.feature(world, world.objects.countries).features,
                                                neighbors = topojson.neighbors(world.objects.countries.geometries);
                                        svg.selectAll(".country")
                                                .data(countries)
                                                .enter().insert("path", ".graticule")
                                                .attr("class", "country")
                                                .attr("d", path)
                                                .style("fill", function (d, i) {
                                                    return '#000';
                                                });
                                        svg.selectAll('circle').data(data).enter().append('circle').attr("r", 2).attr("transform", function (d, i) {
                                            console.log(d, i)
//return "translate(" + projection([-75, 43]) + ")";
                                            return "translate(" + projection([d.longitude, d.latitude]) + ")";
                                        }).attr('fill', function (d) {
                                            if (d['locStatus'] == 'warn') {
                                                return '#f00';
                                            } else {
                                                return '#f70';
                                            }
                                        }).on('mouseover', function (d) {
                                            d3.select(this).attr('fill', '#ff0').transition()
                                                    .duration(750)
                                                    .attr("transform", "translate(0,0)scale(0)").attr('fill', '#f00')
                                            console.log(this, d3.select(this))
// d['test'] = '123'
                                        })
                                    });
                                }, 200);
                            };
                        });
                    }
                };
            }]);
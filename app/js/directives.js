'use strict';

/* Directives */


angular.module('IpLocatorApp.directives', ['d3'])

    .directive('d3Bars', ['$window', '$timeout', 'd3Service', function($window, $timeout, d3Service) {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                label: '@',
                onClick: '&'
            },
            link: function(scope, ele, attrs) {
                d3Service.d3().then(function(d3) {
                    var renderTimeout;
                    var margin = parseInt(attrs.margin) || 20,
                        barHeight = parseInt(attrs.barHeight) || 20,
                        barPadding = parseInt(attrs.barPadding) || 5;

                    var svg = d3.select(ele[0])
                        .append('svg')
                        .style('width', '100%');

                    $window.onresize = function() {
                        scope.$apply();
                    };

                    scope.$watch(function() {
                        return angular.element($window)[0].innerWidth;
                    }, function() {
                        scope.render(scope.data);
                    });

                    scope.$watch('data', function(newData) {
                        scope.render(newData);
                    }, true);

                    scope.render = function(data) {
                        svg.selectAll('*').remove();

                        if (!data)
                            return;
                        if (renderTimeout)
                            clearTimeout(renderTimeout);

                        renderTimeout = $timeout(function() {
                            var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                                height = scope.data.length * (barHeight + barPadding),
                                color = d3.scale.category20(),
                                xScale = d3.scale.linear()
                                .domain([0, d3.max(data, function(d) {
                                    return d.score;
                                })])
                                .range([0, width]);

                            svg.attr('height', height);

                            svg.selectAll('rect')
                                .data(data)
                                .enter()
                                .append('rect')
                                .on('click', function(d, i) {
                                return scope.onClick({item: d});
                            })
                                .attr('height', barHeight)
                                .attr('width', 140)
                                .attr('x', Math.round(margin / 2))
                                .attr('y', function(d, i) {
                                return i * (barHeight + barPadding);
                            })
                                .attr('fill', function(d) {
                                return color(d.score);
                            })
                                .transition()
                                .duration(1000)
                                .attr('width', function(d) {
                                return xScale(d.score);
                            });
                            svg.selectAll('text')
                                .data(data)
                                .enter()
                                .append('text')
                                .attr('fill', '#fff')
                                .attr('y', function(d, i) {
                                return i * (barHeight + barPadding) + 15;
                            })
                                .attr('x', 15)
                                .text(function(d) {
                                return d.name + " = " + d.score;
                            });
                        }, 200);
                    };
                });
            }
        };
    }])

// Placeholder for now!
    .directive('d3Worldmap', ['$window', '$timeout', 'd3Service', function($window, $timeout, d3Service) {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                label: '@',
                onClick: '&'
            },
            link: function(scope, ele, attrs) {
                d3Service.d3().then(function(d3) {

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

                    scope.$watch('data', function(newData) {
                        scope.render(newData);
                    }, true);
                    scope.render = function(data) {
                        svg.selectAll('circle').remove();
                        if (!data)
                            return;
                        console.log('data', data)

                        if (renderTimeout)
                            clearTimeout(renderTimeout);
                        renderTimeout = $timeout(function() {
                            d3.json("http://localhost/github/angular-ip-address-info/app/lib/data/readme-world.json", function(error, world) {
                                var countries = topojson.feature(world, world.objects.countries).features,
                                    neighbors = topojson.neighbors(world.objects.countries.geometries);
                                svg.selectAll(".country")
                                    .data(countries)
                                    .enter().insert("path", ".graticule")
                                    .attr("class", "country")
                                    .attr("d", path)
                                    .style("fill", function(d, i) {
                                    return '#000';
                                });
                                svg.selectAll('circle').data(data).enter().append('circle').attr("r", 2).attr("transform", function(d, i) {
                                    console.log(d, i)
                                    //return "translate(" + projection([-75, 43]) + ")";
                                    return "translate(" + projection([d.longitude, d.latitude]) + ")";
                                }).attr('fill', function(d) {
                                    if (d['locStatus'] == 'warn') {
                                        return '#f00';
                                    } else {
                                        return '#f70';
                                    }

                                }).on('mouseover', function(d) {
                                    d3.select(this).attr('fill', '#ff0').transition()
                                        .duration(750)
                                        .attr("transform", "translate(0,0)scale(0)").attr('fill', '#f00')

                                    console.log(this, d3.select(this))




                                    //     d['test'] = '123'
                                })
                            }).on('mouseout', function(d) {
                                console.log(d)

                            })
                        }, 200);
                    };
                });
            }
        };
    }]);
angular.module('IpLocatorApp').directive('worldMap',
        ['$window', '$timeout',
            function ($window, $timeout) {
                return {
                    restrict: 'A',
                    scope: {
                        data: '=',
                        label: '@',
                        onClick: '&'
                    },
                    link: function (scope, ele, attrs) {
                        var d3 = $window.d3,
                                renderTimeout,
                                width = 940,
                                height = 500,
                                projection = d3.geo.equirectangular(),
                                color = d3.scale.category20c(),
                                path = d3.geo.path()
                                .projection(projection),
                                tip = tip = d3.tip().attr('class', 'd3-tip').html(function (d) {
                                    console.log('ddd', d);
                            return 'IP ADDRESS' +  d.ip;
                        }),
                                svg = d3.select(ele[0])
                                .append("svg")
                                .attr("width", width)
                                .attr("height", height).style('background-color', '#009').call(tip);


                        scope.$watch('data', function (newData) {
                            scope.render(newData);
                        }, true);

                        scope.render = function (data) {
                            svg.selectAll('circle').remove();
                            if (!data) {
                                return;
                            }
                            console.log('data', data)


                            //tip.call(svg);
                            //    if (renderTimeout)
                            //          clearTimeout(renderTimeout);
                            //        renderTimeout = $timeout(function () {
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
                                svg.selectAll('circle')
                                        .data(data)
                                        .enter()
                                        .append('circle')
                                        .attr("r", 3)
                                        .attr('y', function (d) {
                                            return d
                                        })
                                        .attr('x', function (d, i) {
                                            return i
                                        })
                                        .attr("transform", function (d, i) {

                                            return "translate(" + projection([d.longitude, d.latitude]) + ")";
                                        })
                                        .attr('fill', function (d) {
                                            if (d['locStatus'] === 'warn') {
                                                return '#f00';
                                            } else {
                                                return '#f70';
                                            }
                                        })
                                        .on('mouseover', function (d) {
                                            console.log('mouseover', d);
                                            d3.select(this).attr('fill', '#00f')
                                        }).on('mouseover', tip.show)
                                        .on('mouseout', tip.hide);
                            });
//                            }, 200);
                        };

                    }
                };
            }]);
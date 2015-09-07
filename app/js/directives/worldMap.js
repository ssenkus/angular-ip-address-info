IpApp.directive('worldMap',
    ['$window','$timeout',
        function ($window,$timeout) {
            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    label: '@',
                    onClick: '&'
                },
                link: function (scope,ele,attrs) {

                    var d3 = $window.d3,
                        width = '100%',
                        height = 500,
                        projection = d3.geo.equirectangular(),
                        color = d3.scale.category20c(),
                        path = d3.geo.path()
                        .projection(projection),
                        world,
                        tip = d3.tip().attr('class','d3-tip').html(function (d) {

                        return 'IP ADDRESS: ' + d.ip;
                    }).direction('ne'),
                        svg = d3.select(ele[0])
                        .append("svg")
                        .attr("width",width)
                        .attr("height",height).style('background-color','aliceblue').call(tip);


                    d3.json("data/readme-world.json",function (error,data) {
                        world = data;
                        console.log('map data',arguments)
                    });


                    scope.$watch('data',function (newData,curData) {
                        if (newData.length !== curData.length) {
                            console.log('mismatched length');
                            scope.render(newData);
                        }
                        console.log('data watch',arguments);

                    },true);

                    scope.render = function (data) {

                        console.log();

                        svg.selectAll('circle').remove();
                        if (!data) {
                            return;
                        }
                        console.log('data',data)

                        var countries = topojson.feature(world,world.objects.countries).features,
                            neighbors = topojson.neighbors(world.objects.countries.geometries);
                        svg.selectAll(".country")
                            .data(countries)
                            .enter().insert("path",".graticule")
                            .attr("class","country")
                            .attr("d",path)
                            .style("fill",function (d,i) {
                                return '#000';
                            });
                        svg.selectAll('circle')
                            .data(data)
                            .enter()
                            .append('circle')
                            .attr("r",3)
                            .attr('y',function (d) {
                                return d
                            })
                            .attr('x',function (d,i) {
                                return i
                            })
                            .attr("transform",function (d,i) {

                                return "translate(" + projection([d.longitude,d.latitude]) + ")";
                            })
                            .attr('fill',function (d) {
                                if (d['locStatus'] === 'warn') {
                                    return '#f00';
                                } else {
                                    return '#f70';
                                }
                            })
                            .on('mouseover',tip.show)
                            .on('mouseout',tip.hide);

                    };

                }
            };
        }]);
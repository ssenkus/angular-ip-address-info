IpApp.directive('worldMap',
    ['$window','$timeout','modalManager',
        function ($window,$timeout,modalManager) {

            var d3 = $window.d3,
                width = '100%',
                height = 500,
                projection = d3.geo.equirectangular(),
                color = d3.scale.category20c(),
                path = d3.geo.path()
                .projection(projection),
                world;

            function applyTooltip() {
                return d3.tip().attr('class','d3-tip').html(function (d) {
                    return 'IP ADDRESS: ' + d.ip;
                }).direction('ne');
            }

            function registerDataWatch(scope) {
                scope.$watch('data',function (newData,curData) {
                  //  console.log('data',arguments);
//                    newData = newData || [];
//                    curData = curData || [];
                    //if (newData.length !== curData.length) {
                    scope.render(newData);
                },true);

            }

            function linkFn(scope,ele,attrs) {

                var tip = applyTooltip();
                var svg = d3.select(ele[0])
                    .append("svg")
                    .attr("width",width)
                    .attr("height",height).style('background-color','#fafafa').call(tip);

                d3.json("data/readme-world.json",function (error,data) {
                    world = data;

                    registerDataWatch(scope);
                    
                    scope.render = function (data) {
                        svg.selectAll('circle').remove();
                        if (!data) {
                            return;
                        }

                        console.log(world);

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
                            .attr("r",2)
                            .attr('y',function (d) {
                                return d;
                            })
                            .attr('x',function (d,i) {
                                return i;
                            })
                            .attr("transform",function (d,i) {

                                return "translate(" + projection([d.longitude,d.latitude]) + ")";
                            })
                            .attr('fill',function (d) {
                                if (d['locStatus'] === 'warn') {
                                    return '#ac0';
                                } else {
                                    return '#f90';
                                }
                            })
                            .on('mouseover',tip.show)
                            .on('mouseout',tip.hide)
                            .on('click',function (location) {
                                modalManager.openLocationModal({
                                    location: location
                                });
                            });

                    };
                });

            }


            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    label: '@',
                    onClick: '&'
                },
                link: linkFn
            };
        }]);
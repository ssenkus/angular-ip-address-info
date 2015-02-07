<!doctype html>
<html lang="en" ng-app="IpLocatorApp">
    <head>
        <meta charset="utf-8">
        <title>AngularJS IP Address Info</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/dashboard.css"/>
        <link rel="stylesheet" href="css/app.css"/>
    </head>
    <body>
        <div id="wrapper" ng-controller="MenuCtrl">
            <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only" >Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">AngularJS IP Address Info</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a  ng-click="toggleMenu($event)" href="#menu-toggle" id="menu-toggle">Toggle Menu</a></li>
                    </ul>
                </div>
            </div>
            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li><a ui-sref="home">Home</a></li>
                    <li><a ui-sref="search-by-ip">Search by IP Address</a></li>
                    <li><a ui-sref="locations">Locations</a></li>
                    <li><a ui-sref="traceroute">Traceroute</a></li>
                    <li  ng-controller="SearchByIpCtrl" style="padding: 10px;">
                        <input class="form-control" type="text" ng-keypress="submitIp($event)" ng-pattern="inputPattern" placeholder="xxx.xxx.xxx.xxx" ng-model='ipAddress' />
                        <button class="ipSearchSubmit btn" ng-class="{'btn-success': ipAddress, 'btn-info': !ipAddress }" type="button" ng-disabled="!ipAddress" ng-model="validInput" ng-click="getIp(ipAddress)">Get IP info</button>
                        <button class="btn btn-default" type="button" ng-class="{'testIpVals': addedTestVals}"  ng-click="addValidIps()">Add Valid IPs</button> 
                    </li>
                </ul>
            </div>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div ui-view></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /#page-content-wrapper -->

        </div>
        <!-- /#wrapper -->
        <script src="vendor/underscore/underscore.js"></script>
        <script src="vendor/jquery/dist/jquery.js"></script>
        <script src="vendor/angular/angular.js"></script>
        <script src="vendor/angular-bootstrap/ui-bootstrap.js"></script>
        <script src="vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
        <script src="vendor/angular-route/angular-route.js"></script>     
        <script src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
        <script src="vendor/d3/d3.js"></script>
        <script src="http://d3js.org/d3.geo.projection.v0.min.js"></script>
        <script src="vendor/topojson/topojson.js"></script>

        <!-- App Scripts-->
        <script src="js/modules/IpLocatorApp.js"></script>

        <script src="js/controllers/HomeCtrl.js"></script>
        <script src="js/controllers/LocationsTableCtrl.js"></script>
        <script src="js/controllers/MenuCtrl.js"></script>        
        <script src="js/controllers/SearchByIpCtrl.js"></script>
        <script src="js/controllers/TracerouteCtrl.js"></script>
        <script src="js/controllers/WhoisModalCtrl.js"></script>

        <script src="js/directives/d3Bars.js"></script>
        <script src="js/directives/worldMap.js"></script>

        <script src="js/services/locationHandler.js"></script>
        <script src="js/services/tracerouteManager.js"></script>
        <script src="js/services/whoisHandler.js"></script>
        <?php // echo $_SERVER['REMOTE_ADDR']; ?>
    </body>
</html>

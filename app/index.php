<!doctype html>
<html lang="en" ng-app="IpLocatorApp">
    <head>
        <meta charset="utf-8">
        <title>AngularJS IP Address Info</title>
        <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/dashboard.css"/>
        <link rel="stylesheet" href="/css/app.css"/>
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
            <div id="sidebar-wrapper" ng-include="'/views/sidebar.html'"></div>
            <!-- Page Content -->
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div ui-view></div>
                </div>
            </div>
        </div>
        <script src="vendor/underscore/underscore.js"></script>
        <script src="vendor/jquery/dist/jquery.js"></script>
        <script src="vendor/angular/angular.js"></script>
        <script src="vendor/angular-bootstrap/ui-bootstrap.js"></script>
        <script src="vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
        <script src="vendor/angular-route/angular-route.js"></script>     
        <script src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
        <script src="vendor/spinjs/spin.js"></script>
        <script src="vendor/angular-spinner/angular-spinner.js"></script>
        <script src="vendor/d3/d3.js"></script>
        <script src="vendor/d3-tip/index.js"></script>
        <script src="vendor/d3-geo-projection/d3.geo.projection.js"></script>
        <script src="vendor/topojson/topojson.js"></script>

        <!-- App Scripts-->
        <script src="js/modules/IpLocatorApp.js"></script>

        <script src="js/controllers/LocationsLayoutCtrl.js"></script>
        <script src="js/controllers/HomeCtrl.js"></script>
        <script src="js/controllers/LocationsTableCtrl.js"></script>
        <script src="js/controllers/MenuCtrl.js"></script>        
        <script src="js/controllers/SearchByIpCtrl.js"></script>
        <script src="js/controllers/TracerouteCtrl.js"></script>
        <script src="js/controllers/WhoisModalCtrl.js"></script>
        <script src="js/controllers/LocationModalCtrl.js"></script>

        <script src="js/directives/d3Bars.js"></script>
        <script src="js/directives/worldMap.js"></script>

        <script src="js/services/locationCollection.js"></script>
        <script src="js/services/tracerouteManager.js"></script>
        <script src="js/services/modalManager.js"></script>
        <script src="js/services/ipAddressRepository.js"></script>
    </body>
</html>

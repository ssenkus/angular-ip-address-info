IpApp.directive('menuToggler', function () {


    return {
        link: function ($scope, $element) {

            $element.find('#menu-toggle').on('click', function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");

            });

        }
    };
});
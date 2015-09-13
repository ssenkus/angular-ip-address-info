describe('HomeCtrl',function () {

    var controller, scope;

    beforeEach(module('IpLocatorApp'));

    beforeEach(inject(function ($controller,$rootScope) {
        
        scope = $rootScope.new();
        
        controller = $controller('HomeCtrl', {
            $scope: scope
        });
    }));


    it('should run correctly',function () {

        expect(false).toBe(false);
    });





});
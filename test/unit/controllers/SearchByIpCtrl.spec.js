describe('SearchByIpCtrl',function () {

    var controller,
        rootScope,
        scope,
        _locationCollection;

    beforeEach(module('IpLocatorApp'));

    beforeEach(inject(function ($controller,$rootScope,locationCollection) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        _locationCollection = locationCollection;
        spyOn(_locationCollection,'getUserLocation');
        spyOn(_locationCollection,'getLocations');
        controller = $controller('SearchByIpCtrl',{
            $scope: scope,
            locationCollection: _locationCollection
        });
    }));

    describe('IP Address validation', function() {
        
        it('should validate a valid ip address', function () {
            var ip = '12.12.12.12';
            expect(scope.ipAddressMatch(ip)).toBe(true);            
        });
        
        it('should invalidate an out-of-range ip address', function() {
            var ip = '312.12.12.12';
            expect(scope.ipAddressMatch(ip)).toBe(false);
        });
        
        
    });
});
describe('HomeCtrl',function () {

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
        controller = $controller('HomeCtrl',{
            $scope: scope,
            locationCollection: _locationCollection
        });
    }));

    describe('initialization',function () {
        beforeEach(function () {
            scope.initialize();
        });

        it('should get the user location',function () {
            expect(_locationCollection.getUserLocation).toHaveBeenCalled();
        });

        it('should get all locations',function () {
            expect(_locationCollection.getLocations).toHaveBeenCalled();
        });

    });
});
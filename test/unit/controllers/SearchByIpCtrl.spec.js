describe('SearchByIpCtrl',function () {

    var controller,
        rootScope,
        scope,
        _locationCollection,
        event;

    beforeEach(module('IpLocatorApp'));

    beforeEach(inject(function ($controller,$rootScope,locationCollection) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        _locationCollection = locationCollection;
        spyOn(_locationCollection,'getUserLocation');
        spyOn(_locationCollection,'getLocations');
        spyOn(_locationCollection,'addRandomIpAddresses');
        spyOn(_locationCollection,'addDemoIpAddresses');
        controller = $controller('SearchByIpCtrl',{
            $scope: scope,
            locationCollection: _locationCollection
        });
    }));

    describe('Initialization:', function() {
        beforeEach(function() {
            scope.initialize();
        });
        it('should fetch locations', function() {
            expect(_locationCollection.getLocations).toHaveBeenCalled();
        });
        
    });

    describe('Retrieving IP Addresses', function() {
        beforeEach(function() {
            scope.initialize();
        });
        it('should fetch locations', function() {
            expect(_locationCollection.getLocations).toHaveBeenCalled();
        });
        
        it('should fetch random IP addresses:', function() {
            scope.addRandomIpAddresses();
            expect(_locationCollection.addRandomIpAddresses).toHaveBeenCalled();            
        });
        it('should fetch demo IP addresses:', function() {
            scope.addDemoIpAddresses();
            expect(_locationCollection.addDemoIpAddresses).toHaveBeenCalled();
        });
        
    });

    describe('IP address validation:',function () {

        it('should validate a valid ip address',function () {
            var ip = '12.12.12.12';
            expect(scope.ipAddressMatch(ip)).toBe(true);
        });

        // skipped test, TODO!
        xit('should invalidate an out-of-range ip address',function () {
            var ip = '312.12.12.12';
            expect(scope.ipAddressMatch(ip)).toBe(false);
        });

    });

    describe('inputting IP address',function () {

        describe('keystrokes',function () {
            beforeEach(function () {
                spyOn(scope,'getIp');
            });
            it('should get IP address when user hits <RETURN>',function () {
                givenUserEntersIpAddress('12.12.3.4');

                whenUserHitsReturnKey();

                expect(scope.getIp).toHaveBeenCalled();
            });

            it('should not get IP address in the input field when non-enter key button is clicked',function () {
                givenUserEntersIpAddress('12.12.3.4');

                whenUserHitsNonReturnKey();

                expect(scope.getIp).not.toHaveBeenCalled();
            });
            
                 it('should not get IP address in the input field when invalid IP address is entered',function () {
                givenUserEntersIpAddress('asdf');

                whenUserHitsReturnKey();

                expect(scope.getIp).not.toHaveBeenCalled();
            });

            function givenUserEntersIpAddress(ip) {
                scope.ipAddress = ip;
            }

            function whenUserHitsReturnKey() {
                event = {
                    which: 13
                };
                scope.submitIp(event);
            }
            function whenUserHitsNonReturnKey() {
                event = {
                    which: 19
                };
                scope.submitIp(event);
            }

        });


    });
});
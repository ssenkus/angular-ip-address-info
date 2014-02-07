'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1').
    service('locationHandler', function() {
        this.locations = [];
        this.addLocation = function(location) {
            this.locations.push(location);
            console.log('added location', this.locations);
        };
        
        
    
    });
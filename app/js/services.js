'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('IpLocatorApp.services', []).
    service('locationHandler', function() {
    this.locations = [];
    this.addLocation = function(location) {
        console.log('location', location);
        
        if (location.city === "") {
           location.locStatus = "warn" 
        } else {
            location.locStatus = "ok"
            
        }
        
        this.locations.push(location);
        console.log('added location', this.locations);
    };



});
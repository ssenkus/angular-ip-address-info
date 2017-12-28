const _ = require('underscore');

class IpAddressInfo {

    constructor(dataJsonString) {
        let data = JSON.parse(dataJsonString);

        this.ip = data.ip;
        this.country_code = data.country_code;
        this.country_name = data.country_name;
        this.region_code = data.region_code;
        this.region_name = data.region_name;
        this.city = data.city;
        this.zip_code = data.zip_code;
        this.time_zone = data.time_zone;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.metro_code = data.metro_code;
    }

}


module.exports = IpAddressInfo;

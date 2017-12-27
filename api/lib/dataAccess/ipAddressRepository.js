//getIpAddressInfo

const request = require('request');
const request = require('async');

exports.getIpAddressInfo = (done) => {

    request.get('', () => {
        done();
    });

};


/*
 *
 * <?php

 function getDomain($domain) {
 $whois = '';

 $whois_registries = array(
 'whois.internic.net',
 'whois.apnic.net',
 'whois.arin.net',
 'whois.lacnic.net',
 'whois.afrinic.net'
 );

 $out_data = array();
 $count = 0;
 foreach($whois_registries as $reg) {
 $out_data[$count] = array();
 $connection = fsockopen($reg, 43);
 if ($connection) {
 @fputs($connection, $domain ."\r\n");
 while (!feof($connection)) {
 $whois .= fgets($connection, 128);
 }

 }
 fclose($connection);
 $out_data[$count]['regIntReg'] = $reg;
 $out_data[$count]['data'] = $whois;
 $whois = '';

 $count++;
 }
 return $out_data;
 }
 header('Content-Type: application/json');
 echo json_encode(getDomain($_GET['whois_domain']));
 ?>
 *
 *
 * */



/**
 * <?php
 $ip = $_GET['ip'];
 $valid_ip = filter_var($ip, FILTER_VALIDATE_IP);
 if ($valid_ip) {
    $ch = curl_init('http://www.freegeoip.net/json/' + $valid_ip);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $data = curl_exec($ch);
    curl_close($ch);
    echo $data;
} else {
    echo 'invalid ip!';
}
 ?>
 */

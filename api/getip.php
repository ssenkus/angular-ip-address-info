<?php
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
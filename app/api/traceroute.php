<?php

function getTracerouteDomain($domain) {
    $container = array();
    exec('traceroute -q 1 steven-senkus.com', $container);
    $data = array();
    $count = 0;
    foreach ($container as $c) {
        $line = explode('  ', $c);
        
        $arr = array();
        preg_match('/\(([^)]+)\)/', $line[1], $arr);
        $router_name = explode(' ', $line[1]);
        $ip_address = $arr[1];
        $formatted_line = array(
            'line_num' => $line[0],
            'router_name' => $router_name[0],
            'ip_address' => $ip_address,
            'rtt' => $line[2],
        );
        $data[$count++] = $formatted_line;
    }
    return $data;
}
$out = getTracerouteDomain($_GET['traceroute_domain']);
header('Content-Type: application/json');
echo json_encode(array('data' => $out));
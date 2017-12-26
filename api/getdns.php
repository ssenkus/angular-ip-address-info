<?php
$out = dns_get_record($_GET['domain']);
echo json_encode(array('data' => $out));
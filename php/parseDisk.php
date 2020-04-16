<?php
session_start();

require '../model/parseDisk.php';

$obj = new stdClass();
$myParseDisk = new ParseDisk();

$obj->tabIc = $myParseDisk->parseDirectory('../files/ic_languages/');
$obj->tabImg = $myParseDisk->parseDirectory('../files/img/');
$obj->tabImgProject = $myParseDisk->parseDirectory('../files/img_projects/');

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
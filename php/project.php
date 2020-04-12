<?php
session_start();
require_once '../model/project.php';

$obj = new stdClass();

$myProjects = new Project();

$obj->projects = $myProjects->getProjects(1,2);

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
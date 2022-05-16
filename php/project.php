<?php
session_start();
require_once '../model/project.php';

$obj = new stdClass();
$myProjects = new Project();

if (isset($_GET['requestType']) && $_GET['requestType'] == 'nbProjects') {
    $nbProjects = $myProjects->getNbProjects();
    $obj->nbPages = $nbProjects[0][0] / 2;
} else {
    $idFirstProject = $_GET['idFirstProject'];
    $result = $myProjects->getProjects($idFirstProject, $idFirstProject - 1);
    $obj->projects = $result[0];
    $obj->nbProjects = $result[1];
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);

<?php
require 'database.php';

class Project extends Database {
    public function getProjects() {
        $sql = 'SELECT * FROM PROJECTS';
        $req = $this->executeRequete($sql);
        return $req->fetchAll();
    }
}
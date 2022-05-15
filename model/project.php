<?php
require 'database.php';

class Project extends Database
{
    public function getProjects($id1, $id2): array
    {
        $tab = array('id1' => $id1, 'id2' => $id2);
        $sql = 'SELECT * FROM PROJECTS WHERE ID = :id1 OR ID = :id2';
        $req = $this->executeRequete($sql, $tab);
        return array($req->fetchAll(), $req->rowCount());
    }

    public function getNbProjects()
    {
        $sql = 'SELECT COUNT(*) FROM PROJECTS';
        $req = $this->executeRequete($sql);
        return $req->fetchAll();
    }
}

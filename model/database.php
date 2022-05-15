<?php
require_once '../config/config.php';

abstract class Database
{

    private $bdd;

    public function executeRequete($sql, $params = null)
    {      // Permet d'executer les requêtes sql
        if ($params == null)
            $resultat = $this->getBdd()->query($sql);            // exécution directe
        else {
            try {
                $this->getBdd()->beginTransaction();            // Début de transaction
                $resultat = $this->getBdd()->prepare($sql);     // requête préparée
                foreach ($params as $key => $value) {            // Bind de toutes les valeurs de la requête
                    $myKey = ':' . $key;
                    if (is_int($value))
                        $resultat->bindValue($myKey, intval($value), PDO::PARAM_INT);
                    elseif (is_bool($value))
                        $resultat->bindValue($myKey, boolval($value), PDO::PARAM_BOOL);
                    elseif (is_string($value))
                        $resultat->bindValue($myKey, strval($value), PDO::PARAM_STR);
                }
                $resultat->execute();
                $this->getBdd()->commit();
            } catch (Exception $e) {
                $this->getBdd()->rollBack();                    // Annulation et remise à l’état initial en cas d’erreur.
            }
        }
        return $resultat;
    }

    private function getBdd(): PDO
    {    // Renvoie la base de données

        if ($this->bdd == null) {
            $dsn = 'mysql:host=' . SQL_HOST . '; dbname=' . SQL_BASE;
            $DataBase = new PDO($dsn, SQL_USER, SQL_PASS);
            $DataBase->exec('SET CHARACTER SET utf8');
            $DataBase->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->bdd = $DataBase;
        }
        return $this->bdd;
    }

    public function clean($var): string
    { // empêche les insertions de script et sql en "nettoyant" la variable passée en paramètre
        str_replace(array("\n", "\r", PHP_EOL), '', $var);
        return htmlspecialchars($var, ENT_QUOTES, 'UTF-8', false);
    }

    public function regExpMail($mail)
    { // Permet de verifier si le format du mail est bon
        return preg_match('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+((-|\.)[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/', $mail);
    }

    public function __sleep()
    {      // Permet de serializer des objets
        return array();
    }
}

<?php
class ParseDisk {
    public function parseDirectory($dir) {
        $array = array();
        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    if ($file != "." && $file != "..")
                        array_push($array, $file);
                }
                closedir($dh);
            }
        }
        return $array;
    }
}
<?php

class ParseDisk
{
    public function parseDirectory($dir): array
    {
        $array = array();
        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    if ($file != "." && $file != "..")
                        $array[] = $file;
                }
                closedir($dh);
            }
        }
        return $array;
    }
}

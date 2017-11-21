<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 08.11.17
 * Time: 14:57
 */

namespace Helpers;


class FileUpload
{
    /**
     * Save uploaded file to server
     *
     * @param $tmpName
     * @return string|bool
     */
    public static function saveFile(): string
    {
        //check upload exists
        if (!isset($_FILES) || !isset($_FILES['Photo'])) return "";

        $file_name = $_FILES['Photo']['name'];
        $tmp_name=$_FILES['Photo']['tmp_name'];

        //check file extention
        $ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

        //list of allowed extentions
        $allowed = array('gif', 'png', 'jpg');
        if (!in_array($ext, $allowed)) return false;


        //sanitize file contents

        if (getimagesize($tmp_name) === false) return false;

        //seems ok, do save file
        //[userId].[ext]
        $save_name = uniqid(null, true) . "." . $ext;
        $save_path = $_SERVER['DOCUMENT_ROOT'] . "/uploads/" . $save_name;

        if (move_uploaded_file($tmp_name, $save_path) == false) return false;

        return $save_name;
    }
}
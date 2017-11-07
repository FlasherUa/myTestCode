<?php
/**
 * checks if value is sanitized
 * return true | false only
 *
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 14:14
 */

namespace Helpers;

class Sanitized
{
    /**
     *
     * @param $t String
     * @return bool
     */
    public static function filename($t)
    {
       return !preg_match("/[^a-z0-9\-_]/i", $t);
     $str=   htmlentities($str, ENT_QUOTES);
    }


}
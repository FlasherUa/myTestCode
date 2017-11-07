<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 03.11.17
 * Time: 23:25
 */

class Db
{
    /**
     * holder for db connection
     * @var {DbConnection}
     */
    private static $_conn;


    /**
     * Db constructor.
     * Connects to MySql
     * @param string $host
     * @param string $user
     * @param string $pass
     * @param string $db
     */
    protected function __construct($host = "locahost", $user = "root", $pass = "root", $db = "webforge")
    {

        static::$_conn = mysqli_connect($host, $user, $pass, $db);
    }

    /**
     * @param {Array} $data  validated user Data
     * @return {Boolean} True if added, else False
     */
    protected static function insertRow($data, $table)
    {

        $sql = "INSERT INTO ";


        return $r;

    }

    protected static function selectRow($fields, $table, $where)
    {


    }


}
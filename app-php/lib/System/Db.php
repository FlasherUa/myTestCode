<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 03.11.17
 * Time: 23:25
 */
declare(strict_types=1);

namespace System;

use PHPUnit\Runner\Exception;
use \PDO;

abstract class Db
{
    /**
     * holder for db connection
     * @var {DbConnection}
     */
    private static $_conn;


    /**
     * Db constructor.
     * Connects to MySql
     *
     * @throws
     * @dies
     * @param string $host
     * @param string $user
     * @param string $pass
     * @param string $db
     */
    protected static function __init($host = "172.18.0.2", $user = "wfuser", $pass = "0ny7GTGYSGV7534POIQImx9JHDSFGggcf26UYyhsg67", $db = "webforge", $port = "")
    {


        $options = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ];
        // show PDO warnings for development
        if (!_ENV_PRODUCTION) $options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_WARNING;

        try {
            self::$_conn = new \PDO("mysql:host=$host;port=3306;dbname=$db", $user, $pass, $options);
        } catch (\PDOException $e) {
            die('{errors:["DbConnection_Error"]}');
        }
    }

    public static function connection(): \PDO
    {

        if (!self::$_conn) self::__init();

        return self::$_conn;
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

    /**
     * Executes SQL query
     * @param $sql string
     * @param array $data accociative array
     * @return array | false if no data
     */
    protected static function query(string $sql, array $data): \PDOStatement
    {

        $stmt = self::connection()->prepare($sql);
        $stmt->execute($data);

        return $stmt;
    }

    /**
     * last insert ID of DB
     * @return string
     */
    protected static function lastInsertId():string
    {
        return self::connection()->lastInsertId();
    }


}
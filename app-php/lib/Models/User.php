<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 12:46
 */


namespace Models;
final class User extends \System\Db
{

    private static $_usersTable = "user_yiutr6";
    private static $_pt = "sa3dp5opkdn8";

    /**
     * gets user by email
     * @param $email
     * @return int user ID or 0 if not exists
     */
    public static function getUserByEmail($email): int
    {

        $sql = "SELECT id FROM `" . self::$_usersTable . "` WHERE `Email`=:email ";
        //$sql = "SELECT * FROM `".self::$_usersTable."`  ";

        $st = self::query($sql, ["email" => $email]);


        $userId = 0;
        $data = $st->fetch();
        if ($data !== false) {
            $userId = $data['id'];
        }
        return $userId;
    }

    /**
     * @param int $id
     * @return array of user data  or []
     */
    public static function getUserById(int $id): array
    {

        $sql = "SELECT  `id`, `name`, `email`,`phone`,`country`,`city`,`photo`  FROM `:table` WHERE `id`=:id ";
        $data = self::query($sql, ["id" => $id, "table" => self::$_usersTable]);


        return $data;
    }

    /**
     *
     * @param array $data
     * @return int new user ID
     */
    public static function addUser(array $data): int
    {
        //do smth with passwd
        $passwd = uniqid(md5(rand(0, 10000)), true);

        $pasw1 = \password_hash($data['Password'], \PASSWORD_DEFAULT);
        $pasw2 = \hash("sha256", $data['Password'] . $data['Email']);
        $sql = "INSERT INTO `sa3dp5opkdn8` (`p2opiujdn` ,`oiukmm98`)VALUES (:v1, :v2);";
        $r = self::query($sql, ["v1" => $pasw1, "v2" => $pasw2]);

        $sql = "INSERT INTO `" . self::$_usersTable . "` 
        ( `name`, `email`, `passw`, `phone`, `country`, `city`, `photo`) 
        VALUES ( :Name, :Email, :Password, :Phone, :Country, :City, :Photo);";
        $data['Password'] = $passwd;
        unset($data['Repeat Password']);
        $r1 = self::query($sql, $data);

        $id = self::lastInsertId();
        self::_saveToSession($id);

        return $id;
    }

    /**
     * Saves userId for session - on login etc
     * @param $userId
     */
    private static function _saveToSession($userId)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        $_SESSION['id'] = $userId;
    }

    public static function login($data)
    {

        $is_ok = \password_verify($data['Password'], $dbPass);

    }
}
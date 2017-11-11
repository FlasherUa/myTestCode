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

        $sql = "SELECT  `id`, `Name`, `Email`,`Phone`,`Country`,`City`,`Photo`  FROM ".self::$_usersTable." WHERE `id`=:id ";
        $stm = self::query($sql, ["id" => $id]);
        $data= $stm->fetch();

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
        ( `Name`, `Email`, `Password`, `Phone`, `Country`, `City`, `Photo`) 
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
        self::_session_start();
        $_SESSION['id'] = $userId;
    }

    public static function login($data)
    {

        //  $is_ok = \password_verify($data['Password'], $dbPass);

    }

    /**
     * Returns user id from session, if no 0
     * @return int
     */
    public static function getSessionUserId(): int
    {
        self::_session_start();
        $id = $_SESSION['id'] ?? 0;
        return $id;
    }

    public static function logout()
    {
        self::_session_start();
        $_SESSION = array();
        @session_destroy();
    }

    /**
     * Starts session
     * @return array session vars
     */
    private static function _session_start(): array
    {

        if (session_status() == PHP_SESSION_NONE && !isset($_SESSION)) {
            @session_start();
        }
        return $_SESSION;

    }
}
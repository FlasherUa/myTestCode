<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 07.11.17
 * Time: 15:43
 */
declare(strict_types=1);

use PHPUnit\Framework\TestCase;


class TestUser extends TestCase
{


    private static $data = ["Name" => "Seruga", "Password" => "12345Az", "City" => "Tallas", "Email" => "1@11.com"];

    public function testRegisterErrors(): void
    {
        $data =& static::$data;


        $response = $this->_doRegister($data);

        $this->assertTrue(
            $response->errors && $response->errors[0][0] == "notValid" && $response->errors[0][1] == "Password",
            "2. data has no PASSWORD error but must"
        );

        $data["Password"] = "Narnia123";


        $response = $this->_doRegister($data);

        $this->assertTrue(
            $response->errors && $response->errors[0][0] == "noValue" && $response->errors[0][1] == "Phone",
            "3. data has no Phone error but must"
        );


        $data["Phone"] = "+123 452 31 65 46";
        $data['Email'] = "1@1.com";//email must exist in db
        $response = $this->_doRegister($data);

        $this->assertTrue(
            $response->errors && $response->errors[0][0] == "emailExists",
            "4. data must have Email exists error"
        );

    }

    /**
     *
     */
    public function testRegister(): void
    {

        //delete users by email   "noexistent@email.com"
        //in case it was not deleted after prev test attempt
        userTestHelper::deleteByEmail("noexistent@email.com");

        $data =& static::$data;
        $data["Phone"] = "+123 452 31 65 46";
        $data["Email"] = "noexistent@email.com";

        $response = $this->_doRegister($data);


        $this->assertTrue(
            $response->registered->Name == "Seruga",
            "5. user not registered"
        );


        //userTestHelper::deleteByEmail("noexistent@email.com");
    }

    /**
     * @depends testRegister
     */
    public function testGetUserInfo(): void
    {
        $_SESSION['id'] = 1;
        $controller = new \Controllers\User();
        $controller->userInfo();
        $out = $controller->output();

        $response = json_decode($out);

        $this->assertTrue(
            isset($response->logged->Name) ,
            "5. user not registered"
        );
    }


    /**
     * Helper register function
     * @param array $data
     * @return stdClass
     */
    private function _doRegister(array $data)
    {

        $controller = new \Controllers\User($data);
        $controller->register();
        $out = $controller->output();

        $obj = json_decode($out);
        return $obj;

    }


    private function _prepareUploadTest()
    {
        $temp_file = tempnam(sys_get_temp_dir(), 'Tux');
        copy("testfile.jpg", "tmpfile");
        $_FILES = [
            'filename' => [
                'name' => $this->uploadedFile,
                'type' => 'image/png',
                'size' => 5093,
                'tmp_name' => $this->uploadedFile,
                'error' => 0
            ]
        ];

    }
}


class userTestHelper extends \System\Db
{
    static public function deleteByEmail($email)
    {

        $sql = "DELETE FROM `user_yiutr6` WHERE `email` LIKE :email ;";

        self::query($sql, ["email" => $email]);
    }

}
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
    public function testRegister(): void
    {
        $data = ["Name" => "Seruga", "Password" => "12345Az", "City" => "Tallas", "Email" => "1@11.com"];

        $controller = new \Controllers\User($data);
        $controller->register();
        $out = $controller->output();

        $this->assertTrue(
            strpos($out, '{"errors"') === 0,
            "data has no errors but must"
        );

        $responce = json_decode($out);

        $this->assertTrue(
            $responce->errors && $responce->errors[0][0]=="notValid" && $responce->errors[0][0]=="Password" ,
            "data has no errors but must"
        );

        $data["Country"] = "Narnia";
        $data["Phone"] = "+123 452 31 65 46";


        $controller = new \Controllers\User($data);
        $controller->register();
        $out = $controller->output();

        $responce = json_decode($out);

        $this->assertTrue(
            strpos($out, '{"errors"') === 0,
            "data has no errors but must"
        );


    }


}

<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 12:25
 */
declare(strict_types=1);

namespace Controllers;

class User extends \System\Controller
{

    public function userInfo()
    {


    }


    public function register():void
    {

        $this->_loadModel("user");
        $this->_validateData(true);


    }

    public function login()
    {

    }

}
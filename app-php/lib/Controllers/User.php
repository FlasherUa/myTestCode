<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 12:25
 */

namespace Controllers;

class User extends \System\Controller
{

    public function userInfo()
    {


    }


    public function register()
    {
        echo "reg";
        $this->_loadModel("user");


    }

    public function login()
    {

    }

}
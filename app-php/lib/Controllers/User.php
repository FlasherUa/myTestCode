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

        \Models\User::getUserById(1);
    }


    /**
     * Creates new user
     * @return int new user Id or 0 if error
     * @throws \Helpers\InvalidDataException
     */
    public function register(): int
    {
        //check data
        $this->_loadModel("user");
        $validatedData = $this->_validateData(true);

        //if validations errors - break
        if (isset($validatedData['_hasErrors'])) return 0;

        //if email exists - break
        if (\Models\User::getUserByEmail($validatedData['Email']) !== 0) {

            $this->_addError("emailExists");
            return 0;
        }

        //save uploaded file
        $fileName=\Helpers\FileUpload::saveFile();
        $validatedData['Photo']=$fileName;

        //all is ok, add to DB
        $newId = \Models\User::addUser($validatedData);
        return $newId;
    }


}
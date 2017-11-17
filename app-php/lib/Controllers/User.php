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
        $userId = \Models\User::getSessionUserId();
        if ($userId > 0) $data = \Models\User::getUserById($userId);
        if (isset($data)) $this->_addResponse("logged", $data);
        else $this->_addResponse("notLogged");

    }

    /**
     * @throws \Helpers\InvalidDataException
     */
    public function login()
    {
        $this->_loadModel("user");
        $this->_model = array_slice($this->_model, 1, 2);
        $validatedData = $this->_validateData(true);

        //if validations errors - break
        if (isset($validatedData['_hasErrors'])) return;

        $userData = \Models\User::login($validatedData);
        if (isset($userData['Name']) ){
            //save to session


            $this->_addResponse("logged", $userData);

        } else $this->_addResponse("notLogged");

    }

    public function logout()
    {
        \Models\User::logout();
        $this->_addResponse("notLogged");
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
        $fileName = \Helpers\FileUpload::saveFile();
        $validatedData['Photo'] = $fileName;

        //all is ok, add to DB
        $newId = \Models\User::addUser($validatedData);

        //clear password fields
        unset($validatedData['Password']);
        unset($validatedData['Repeat Password']);

        $this->_addResponse("registered", $validatedData);
        return $newId;
    }


}
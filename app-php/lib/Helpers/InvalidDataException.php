<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 08.11.17
 * Time: 7:52
 */

namespace Helpers;


class InvalidDataException extends \Exception
{
    public function errorMessage()
    {

        return ["error" => $this->getMessage()];
    }

}
<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 03.11.17
 * Time: 23:24
 */

declare(strict_types=1);

namespace Helpers;


class Validate
{

    /**
     * Validates any data field according to its type
     *
     * @param $value
     * @param string $type data type
     * @param array $params additional params
     * @return bool|string true if validated
     */

    public static function field($value, string $type, array $params = []): bool
    {
        $validated = false;
        switch ($type) {
            case "email":
                $validated = self::email($value);

                break;
            case "text":
                $validated = self::str_length($value, $params);
                break;
            case "password":
                $validated = self::str_length($value, $params) === true && self::password($value) === true;

        }

        return $validated;
    }


    /**
     * @param string $email
     * @return bool
     */

    private static function email(string $email): bool
    {
        return $email === filter_var($email, FILTER_VALIDATE_EMAIL);

    }

    /**
     * @param string $text
     * @return bool
     */

    private static function text(string $text): bool
    {
        return $text == filter_var($text, FILTER_VALIDATE_EMAIL);

    }

    /**
     * @param string $password
     * @return bool
     */

    private static function password(string $password): bool
    {
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number = preg_match('@[0-9]@', $password);

        return $uppercase && $lowercase && $number;


    }

    /**
     * @param string $value
     * @param array $params [min length, max length]
     * @return bool
     */

    private static function str_length(string $value, array $params): bool
    {
        $l = strlen($value);
        if (isset($params[0]) && $params[0] > 0 && $l < $params[0]) return false;
        if (isset($params[1]) && $params[1] > 0 && $l > $params[1]) return false;
        return true;
    }


}
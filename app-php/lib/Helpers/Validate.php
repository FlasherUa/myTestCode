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
     * @param string $email
     * @return bool
     */
    public static function email(string $email): bool
    {
        return $email === filter_var($email, FILTER_VALIDATE_EMAIL);

    }

    /**
     * @param string $text
     * @return bool
     */
    public static function text(string $text): bool
    {
        return $text == filter_var($text, FILTER_VALIDATE_EMAIL);

    }

    public static function length(array $params): bool
    {


    }
}
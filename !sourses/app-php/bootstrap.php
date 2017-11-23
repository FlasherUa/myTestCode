<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 07.11.17
 * Time: 17:56
 */


/*
 * Some bootstraping
 */

//set error reporting
if ($_ENV['PHP_DEV_PROD'] === "production") {
    define("_ENV_PRODUCTION", true);
    error_reporting(0);
} else {
    define("_ENV_PRODUCTION", false);
    error_reporting(E_ALL);
}

/*
 * autoload classes
 */
define('BASE_PATH', realpath(dirname(__FILE__)));

/**
 * Loads class by namespace+name
 * @param $class
 */
function my_autoloader($class)
{
    $filename = BASE_PATH . '/lib/' . str_replace('\\', '/', $class) . '.php';
 include($filename);
}

spl_autoload_register('my_autoloader');

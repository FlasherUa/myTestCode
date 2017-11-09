<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 07.11.17
 * Time: 17:56
 */

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
    $filename = BASE_PATH . '/'. str_replace('\\', '/', $class) . '.php';
    include($filename);
}

spl_autoload_register('my_autoloader');

<?php
/**
 * Server API input gateway
 *
 *
 * Created by PhpStorm.
 * User: flasher
 * Date: 03.11.17
 * Time: 18:00
 */


include("bootstrap.php");

/** @var array $_ALLOWED_ACTIONS
 * List of allowed actions for USER
 */
$_ALLOWED_ACTIONS = ["register", "login", "logout", "userInfo"];


/** @var String $className
 * Default controller class
 */
$className = "Controllers\User";

/*
 * And ... GO!
 */
//query security check
$query = $_GET ['action'] ?? "";

//default action
if ($query === "") $query = "userInfo";


$index = array_search($query, $_ALLOWED_ACTIONS);

if ($index !== false) $action = $_ALLOWED_ACTIONS[$index];
$data = $_POST;


if (isset($action) && method_exists($className, $action)) {

    //main controller action
    $controller = new $className($data);

    $controller->$action($data);
    //output result
    echo $controller->output();


} else {

    //error? hacker?  drop 404 error
    header("HTTP/1.0 404 Not Found");

}



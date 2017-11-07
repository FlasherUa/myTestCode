<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 12:33
 */

namespace System;

class Controller
{

    /**
     * Container for input data
     * @var array
     */
    protected $_input;
    /**
     * Container for output data
     * @var array
     */
    protected $_output = [];


    CONST _MODELS_PATH = "../../../www/html/webforge-test/www/js-src/app-js/models/";

    public function __construct($data)
    {
        $this->_input = $data;

    }


    /**
     * Finalize execution
     * @return string
     */
    public function output()
    {
        //output response data - if any 
        return json_encode($this->_output);
    }


    /**
     * loads model from JS-JSON source(model source is common with client app)
     * @param String $modelName
     * @return array fields model
     */
    protected function _loadModel(String $modelName)
    {
        //check model name
        $path = Controller::_MODELS_PATH . (string)$modelName . ".js";
        if (!$modelName || !\Helpers\Sanitized::filename($modelName) || !file_exists($path))  return $this->_error("badModel");

        //load model
        $contents = file_get_contents($path);
        //erase JS tags
        $json_start = strpos($contents, "//JSON START");
        $contents=substr($contents, $json_start);

        try {
            $model = json_decode($contents);
        }catch(Exception $e){

            //exeption
            return $this->_error("badModelJson");
        }

        return $model;
    }

    /**
     * add errors messages to output
     * @param $code
     * @param string $message
     */
    protected function _error($code, $message = "")
    {
        //init errors container
        $this->_output['errors'] || $this->_output['errors'] = [];

        //add error
        $this->_output['errors'][] = [$code, $message];

    }


}
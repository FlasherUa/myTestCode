<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 05.11.17
 * Time: 12:33
 */
declare(strict_types=1);

namespace System;

use \Helpers\InvalidDataException as InvalidDataException;

abstract class Controller
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

    /**
     * Container for model data
     * @var array
     */
    protected $_model;

    CONST _MODELS_PATH = "../../../html/js-src/app-js/models/";

    public function __construct(array $data)
    {
        $this->_input = $data;
        set_exception_handler(array($this, '_addError'));

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
     * @throws InvalidDataException
     * @return array fields model
     */
    protected function _loadModel(String $modelName)
    {
        //check model name and file
        $path = Controller::_MODELS_PATH . (string)$modelName . ".model.js";
        if (!$modelName || !\Helpers\Sanitized::filename($modelName) || !file_exists($path)) {
            throw new InvalidDataException("badModel");
        }

        //load model
        $contents = file_get_contents($path);
        //erase JS tags
        $json_start = strpos($contents, "//JSON START");
        $contents = substr($contents, $json_start + 12);

        //decode from json
        try {
            $model = json_decode($contents);
        } catch (Exception $e) {

            throw new InvalidDataException("badModelJson");
        }

        //save
        $this->_model = $model;
        return $model;
    }


    /**
     * validates $this->data against $this->model
     * @param bool $strict
     */
    protected function _validateData(bool $strict = false)
    {
        //container for validated data
        $out = [];
        foreach ($this->_model as $item) {


            foreach ($item as $name => $params) {

                //check if value exists


                $value = $this->_input[$name] ?? null;
                if ($value == null) {
                    if (isset($params[1]) && $params[1][0] > 0  ) {
                        $this->_addError("noValue", $name);
                    }
                    continue;
                }

                //validate value
                $validated = \Helpers\Validate::field($value, $params[0], $params[1]);
                if ($validated !== true) {
                    //not validated
                    $this->_addError("notValid", $name);
                } else {
                    //validated ok
                    $out[$name] = $value;
                }
            }
        }

        return $out;
    }

    /**
     * add errors messages to output
     * @param $code
     * @param string $message
     */
    protected
    function _addError($code, $message = "")
    {
        //init errors container
        isset($this->_output['errors']) || $this->_output['errors'] = [];

        //add error
        $this->_output['errors'][] = [$code, $message];

    }


}
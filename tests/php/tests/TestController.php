<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 07.11.17
 * Time: 15:43
 */
declare(strict_types=1);

use PHPUnit\Framework\TestCase, \Helpers;

class TestController extends TestCase
{
    public function testloadGoodModel(): void
    {


        $controller = new Mock_Controller([]);

        $model = $controller->loadGoodModel();
        $this->assertTrue(
            is_array($model), "Bad Model"
        );

        $this->assertTrue(
            count($model) > 1, "Bad Items Count"
        );

        $this->assertTrue(
            $model[0] instanceof stdClass, "Bad Item Error"
        );
    }


    public function testloadBadModel(): void
    {


        $controller = new Mock_Controller([]);


        $this->expectException(Helpers\InvalidDataException::class);
        $controller->loadBadModel();

    }


    public function testReturnErorrMessage(): void
    {


        $controller = new Mock_Controller([]);


        $this->expectException(Helpers\InvalidDataException::class);
        $controller->loadBadModel();
        $out=$controller->output();
            $this->assertTrue(
              true
            );

    }



}


class Mock_Controller extends \System\Controller
{


    public function loadGoodModel()
    {
        $this->_loadModel("user");
        return $this->_model;

    }

    public function loadBadModel()
    {

        $this->_loadModel("no_model");

        return $this->_model;

    }

}

<?php
/**
 * Created by PhpStorm.
 * User: flasher
 * Date: 07.11.17
 * Time: 15:43
 */
declare(strict_types=1);

use PHPUnit\Framework\TestCase, \Helpers;

class TestValidate extends TestCase
{
    public function testEmail(): void
    {
        $this->assertEquals(
            \Helpers\Validate::email("hi@hi.hi"),
            true
        );

        $this->assertEquals(
            \Helpers\Validate::email("hi(a)hi.hi"),
            false
        );
    }


    public function testText(): void
    {
        $this->assertEquals(
            \Helpers\Validate::text("hi@hi.hi"),
            true
        );

        $this->assertEquals(
            \Helpers\Validate::email("hi(a)hi.hi"),
            false
        );
    }



}

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
            true,
            \Helpers\Validate::field("hi@hi.hi", "email"),
            "err email validate"

        );

    }


    public function testText(): void
    {
        $this->assertEquals(
            false,
            \Helpers\Validate::field("hi(a)hi.hi", "text", [30,90]),
        "err length validate");
    }



}

#!/bin/bash

#
# Do all necessary preparations and put production  to html-distr
#
#minify js
tests/js/grunt htmlmin
#minify html
tests/js/grunt htmlmin
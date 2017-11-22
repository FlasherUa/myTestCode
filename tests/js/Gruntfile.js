module.exports = function (grunt) {


// Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    '../../production-root/html/bind/out.js': ['../../html/js-src/**/*.js']
                }
            }
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {

                    '../../production-root/html/index.html': '../../html/index_production.html'

                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('h', ['htmlmin']);
};
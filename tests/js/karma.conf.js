
var webpackConfig = require('./testing.webpack.js');
module.exports=function(config) {
    config.set({
        // конфигурация репортов о покрытии кода тестами
        coverageReporter: {
            dir:'tmp/coverage/',
            reporters: [
                { type:'html', subdir: 'report-html' },
                { type:'lcov', subdir: 'report-lcov' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact:true }
            }
        },
        // test файлы
        files: [ '../../html/index.html',

            '../../html/js-src/3dparty/*.js',
            '../../html/js-src/app-js/models/*.js',
            '../../html/js-src/app-js/langs/*.js',
            '../../html/js-src/app-js/Controllers/*.js',
            '../../html/js-src/app-js/lib-js/*.js',
            '../../html/js-src/*.js',
            'tests/*.js'

        ],
        frameworks: [ 'chai', 'jasmine' ],
        // репортеры необходимы для  наглядного отображения результатов
        reporters: ['mocha', 'coverage'],
        preprocessors: {
            '*.js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-jasmine',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-sourcemap-loader'
        ],
        proxies: {
          "/api":"http://localhost:8800/api"
        },
        // передаем конфигурацию webpack
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo:true
        }
    });
};
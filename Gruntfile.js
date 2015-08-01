module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        "browserify": {
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
            client: {
                src: ['src/js/initialize.js'],
                dest: 'build/js/main.min.js'
            }
        },
        "jsbeautifier" : {
            files : ["src/js/**/*.js"],
            options: {
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        },
        "clean": ['build/'],
        "copy": {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**', '!js/**'],
                    dest: 'build/'
                }]
            }
        },
        "uglify": {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'build/js/main.min.js': ['build/js/main.min.js']
                }
            }
        },
        "cssmin": {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: ['style.css'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },
        "mocha_istanbul": {
            coverage: {
                src: 'test',
                options: {
                    reporter: 'spec',
                    print: 'summary',
                    coverage: true,
                    root: './src',
                    reportFormats: ['lcovonly']
                }
            }
        },
        "mocha_phantomjs": {
            all: ['test-e2e/**/*.html']
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('deploy', ['jsbeautifier', 'clean', 'copy', 'cssmin', 'browserify', 'uglify', 'mocha_istanbul', 'mocha_phantomjs']);
    grunt.registerTask('test', ['jsbeautifier', 'clean', 'copy', 'cssmin', 'browserify', 'uglify', 'mocha_phantomjs', 'mocha_istanbul']);
    grunt.registerTask('default', ['jsbeautifier', 'clean', 'copy', 'cssmin', 'browserify']);
};
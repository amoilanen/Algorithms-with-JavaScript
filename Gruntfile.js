module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                //'spec/**/*.js',
                'src/**/*.js'
            ],
            options: {
                multistr: true,
                node: true,
                curly: false,
                eqeqeq: false,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            }
        },
        jasmine: {
            unit: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/**/*.spec.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint', 'jasmine:unit']);
};
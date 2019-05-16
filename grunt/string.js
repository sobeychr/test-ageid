'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-string-replace');

    const path = './dist/script.js';
    let js = '';
    if(grunt.file.exists(path)) {
        js = grunt.file.read(path);
    }

    return {
        dist: {
            options: {
                replacements: [
                    {
                        pattern: /\<script[^\<]+\<\/script\>/,
                        replacement: '<script>' + js + '</script>'
                    }
                ]
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    };
};

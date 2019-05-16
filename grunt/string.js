'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-string-replace');

    const path = './dist/script.js';
    let replacement = '';
    if(grunt.file.exists(path)) {
        replacement = grunt.file.read(path);
    }

    return {
        dist: {
            options: {
                replacements: [
                    /*
                    {
                        pattern: '{script}',
                        replacement
                    }
                    */
                ]
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    };
};

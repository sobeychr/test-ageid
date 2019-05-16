'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-string-replace');

    let path = 'dist/script.js';
    if(!grunt.file.exists(path)) {
        path = 'src/script.js';

        grunt.log.errorlns('"grunt js" must be run first');
    }

    return {
        dist: {
            options: {
                delay: 750,
                replacements: [
                    {
                        pattern: '{script}',
                        replacement: grunt.file.read(path)
                    }
                ]
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    };
};

'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-string-replace');

    return {
        dist: {
            options: {
                replacements: [
                    {
                        pattern: /\<\!\-\-/g,
                        replacement: ''
                    },
                    {
                        pattern: /\-\-\>(\n|\r)+.+(\n|\r)+/g,
                        replacement: ''
                    }
                ]
            },
            files: {
                'dist/index.html': 'src/index.html'
            }
        }
    };
};

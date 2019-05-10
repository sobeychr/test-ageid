'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    return {
        dist: {
            options: {
                collapseWhitespace: true,
                minifyCSS: true,
                removeComments: true
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    };
};

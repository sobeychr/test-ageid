'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    return {
        dist: {
            options: {
                comments: false,
                ie8: false,
                sourceMap: false
            },
            files: {
                'dist/script.js': 'src/script.js'
            }
        }
    };
};

'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        dist: [
            'dist/*'
        ]
    };
};

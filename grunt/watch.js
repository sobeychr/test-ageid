'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        html: {
            files: ['src/*./html'],
            tasks: ['html']
        },
        js: {
            files: ['src/*./js'],
            tasks: ['js']
        }
    };
};

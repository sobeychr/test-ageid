'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: './src/img/',
                    src: ['*.png'],
                    dest: 'dist/img',
                    filter: 'isFile'
                }
            ]
        }
    };
};

'use strict';

module.exports = grunt => {
    const string = require('./grunt/string.js')(grunt);
    const htmlmin = require('./grunt/htmlmin.js')(grunt);
    require('./grunt/tasks.js')(grunt);

    grunt.config.init({
        pkg: grunt.file.readJSON('./package.json'),
        'string-replace': string,
        htmlmin
    });
};

'use strict';

module.exports = grunt => {
    grunt.config.init({
        pkg: grunt.file.readJSON('./package.json'),
        
        clean: require('./grunt/clean.js')(grunt),
        htmlmin: require('./grunt/htmlmin.js')(grunt),
        'string-replace': require('./grunt/string.js')(grunt),
        uglify: require('./grunt/uglify.js')(grunt),
        watch: require('./grunt/watch.js')(grunt),
    });

    grunt.registerTask('default', () => {
        grunt.log.errorlns('Unable to run "default" task');
        grunt.log.writelns('>> run "grunt clean"');
        grunt.log.writelns('>> run "grunt html"');
        grunt.log.writelns('>> run "grunt js"');
        grunt.log.writelns('>> run "grunt watch"');
    });

    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('html', ['htmlmin', 'string-replace']);
};

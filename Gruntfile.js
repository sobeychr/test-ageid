'use strict';

module.exports = grunt => {
    grunt.config.init({
        pkg: grunt.file.readJSON('./package.json'),
        
        clean: require('./grunt/clean.js')(grunt),
        copy: require('./grunt/copy.js')(grunt),
        htmlmin: require('./grunt/htmlmin.js')(grunt),
        'string-replace': require('./grunt/string.js')(grunt),
        uglify: require('./grunt/uglify.js')(grunt),
    });

    const jsPath = 'dist/script.js';

    grunt.registerTask('default', () => {
        grunt.log.errorlns('Unable to run "default" task');
        grunt.log.writelns('>> run "grunt build"');
        grunt.log.writelns('>> run "grunt clean"');
    });

    grunt.registerTask('build', 'Building...', function() {
        const done = this.async();

        grunt.task.run(['copy', 'htmlmin','uglify']);

        setTimeout(() => {
            grunt.task.run(['string-replace']);

            if(grunt.file.exists(jsPath)) {
                grunt.file.delete(jsPath);
            }

            done();
        }, 1100);
    });
};

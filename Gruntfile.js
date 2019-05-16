'use strict';

module.exports = grunt => {
    grunt.config.init({
        pkg: grunt.file.readJSON('./package.json'),
        
        clean: require('./grunt/clean.js')(grunt),
        copy: require('./grunt/copy.js')(grunt),
        htmlmin: require('./grunt/htmlmin.js')(grunt),
        uglify: require('./grunt/uglify.js')(grunt),
    });

    grunt.registerTask('default', () => {
        grunt.log.errorlns('Unable to run "default" task');
        grunt.log.writelns('>> run "grunt build"');
        grunt.log.writelns('>> run "grunt clean"');
        //grunt.log.writelns('>> run "grunt rename"');
    });

    grunt.registerTask('build', ['copy', 'htmlmin', 'uglify', 'string']);

    grunt.registerTask('string', function() {
        const pathHtml = './dist/index.html';
        const pathJs = './dist/script.js';

        const js = grunt.file.read(pathJs);
        const html = grunt.file.read(pathHtml);
        const cut = html.substring(
            html.indexOf('<script'),
            html.indexOf('</script')
        );
        const newHtml = html.replace(cut, '<script>' + js);

        grunt.file.write(pathHtml, newHtml);
        grunt.file.delete(pathJs);
    });

    /*
    grunt.registerTask('rename', () => {
        grunt.file.recurse('./src/img', (abs, rootDir, sub, filename) => {
            filename = filename
                .toLowerCase()
                .replace(/[^\w\d\.]+/g, '')
                .replace('logo', '');

            const newPath = rootDir + '/' + filename;
            
            grunt.file.copy(abs, newPath);
            grunt.file.delete(abs);
        });
    });
    */
};

'use strict';

module.exports = grunt => {
    grunt.registerTask('default', ['string-replace', 'htmlmin']);
};

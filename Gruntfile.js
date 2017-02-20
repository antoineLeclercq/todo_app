module.exports = function (grunt) {
  grunt.initConfig({
    bower_concat: {
      all: {
        dest: 'javascripts/vendor/all.js',
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore',
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'javascripts/vendor/all.js': ['javascripts/vendor/all.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['bower_concat', 'uglify']);
};
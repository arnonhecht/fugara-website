module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    assemble: {
      options: {
        layout: 'page.hbs',
        layoutdir: './src/bonnet/layouts/',
        partials: './src/bonnet/partials/**/*.hbs'
      },
      posts: {
        files: [{
          cwd: './src/content/',
          dest: './dist/',
          expand: true,
          src: ['**/*.hbs', '!_pages/**/*.hbs']
        }, {
          cwd: './src/content/_pages/',
          dest: './dist/',
          expand: true,
          src: '**/*.hbs'
        }]
      }
    },
    uglify: {
        main: {
            src: 'src/js/main.js',
            dest: 'dist/js/main.min.js'
        },
        vendor: {
          files: [{
            'dist/js/vendor.min.js': ['src/vendor/js/**/*.js']
          }]
        }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/css/main.min.css": ["src/less/**/*.less", "src/less/**/*.css"],
          "dist/css/vendor.min.css": ["src/vendor/less/**/*.less", "src/vendor/less/**/*.css"]
        }
      }
    },
    watch: {
        markup: {
            files: ['src/bonnet/**/*', 'src/content/**/*'],
            tasks: ['assemble'],
            options: {
                spawn: false,
            },
        },
        scripts: {
            files: ['src/js/*.js', 'src/vendor/js/**/*.js'],
            tasks: ['uglify', 'assemble'],
            options: {
                spawn: false,
            },
        },
        less: {
            files: ['src/less/**/*.less', 'src/less/**/*.css', 'src/vendor/less/**/*.less', 'src/vendor/less/**/*.css'],
            tasks: ['less', 'assemble'],
            options: {
                spawn: false,
            }
        },
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-assemble');


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble', 'connect']);

};
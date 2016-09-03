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
            dest: 'dist/js/main2.min.js'
        },
        vendor: {
          files: [{
            'dist/js/vendor.min.js': ['src/js/vendor/**/*.js']
          }]
        }
    },
    less: {
        expanded: {
            options: {
                paths: ["css"]
            },
            files: {
                "dist/css/main.css": ["src/less/**/*.less", "src/less/**/*.css"]
            }
        },
        minified: {
            options: {
                paths: ["css"],
                cleancss: true
            },
            files: {
                "dist/css/main.min.css": "src/less/main.less"
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
            files: ['src/js/*.js'],
            tasks: ['uglify', 'assemble'],
            options: {
                spawn: false,
            },
        },
        less: {
            files: ['src/less/**/*.less'],
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
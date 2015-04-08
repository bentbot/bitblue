/*!
 * Cribbb Gruntfile
 * http://cribbb.com
 * @author Philip Brown
 */
 
'use strict';
 
/**
 * Grunt Module
 */
module.exports = function(grunt) {
 
};

grunt.initConfig({
 
});

pkg: grunt.file.readJSON('package.json'),

/**
 * Set project object
 */ 

project: {
  app: 'bit.blue',
  view: '<%= project.app %>/views',
  css: [
    '<%= project.view %>/scss/style.scss'
  ],
  js: [
    '<%= project.view %>/js/*.js'
  ]
},

/**
 * Project banner
 */ 
tag: {
  banner: '/*!\n' +
          ' * <%= pkg.name %>\n' +
          ' * <%= pkg.title %>\n' +
          ' * <%= pkg.url %>\n' +
          ' * @author <%= pkg.author %>\n' +
          ' * @version <%= pkg.version %>\n' +
          ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> 
licensed.\n' +
          ' */\n'
},

/**
 * Sass
 */ 
sass: {
  dev: {
    options: {
      style: 'expanded',
      banner: '<%= tag.banner %>',
      compass: true
    },
    files: {
      '<%= project.view %>/css/style.css': '<%= project.css %>'
    }
  },
  dist: {
    options: {
      style: 'compressed',
      compass: true
    },
    files: {
      '<%= project.view %>/css/style.css': '<%= project.css %>'
    }
  }
},
/**
 * Watch
 */ 
watch: {
  sass: {
    files: '<%= project.view %>/resources/scss/{,*/}*.{scss,sass}',
    tasks: ['sass:dev']
  }
}

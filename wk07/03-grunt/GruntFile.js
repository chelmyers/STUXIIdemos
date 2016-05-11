module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'a/css/screen.css' : 'a/sass/screen.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'a/sass/**/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		},
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      single_file: {
             src: 'a/css/screen.css',
             dest: 'a/css/screen.css'
      },
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch', 'autoprefixer']);
}

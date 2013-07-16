module.exports = function(grunt) {
	// 'use strict'

	grunt.initConfig({
		compass: {
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					environment: 'production',
					outputStyle: 'expanded',
					require: ['bourbon','neat']
				}
			}
		},

		coffee: {
			compile: {
				files: {
					'js/main.js': 'coffee/main.coffee'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 80,
					base: ''
					// keepalive:true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			coffee: {
				files: ['coffee/main.coffee'],
				tasks: 'coffee'
			},
			compass: {
				files: ['scss/*'],
				tasks: 'compass'
			},
			staticRes: {
				files: ['index.html']
			}
		},

		open: {
			dev: {
				// path: 'http://localhost:8080'
				path: 'http://ego_new.dev'
			}
		},

		uglify: {
			solo: {
				files: {
					'js/main.min.js': ['js/main.js']
				}
			},
			full: {
				files: {
					'js/prezenter-full.min.js': ['js/jquery.tranzit.js', 'js/prezenter.js']
				}
			}
		}
	});

	// Load necessary plugins
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['connect', 'open', 'watch']);
	grunt.registerTask('apache', ['watch']);

};
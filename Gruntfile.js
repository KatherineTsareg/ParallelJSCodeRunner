module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			default: {
				src:["scripts/*ts", "!node_modules/**"],
				tsconfig: true
			}
		},
		tslint: {
			options: {
				configuration: "tslint.json"
			},
			your_target: {
				src: ["project/js/*.ts"]
			}
		},
		concat: {
			html:{
				src: ['index.html'],
				dest: 'build/index.html'
			},
			js: {
				src: ['scripts/*.js'],
				dest: 'build/scripts.js'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
					'css/*.css'],
				dest: 'build/styles.css'
			},
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					livereload: true,
					port: 8080,
					base: 'build/',
					open: {
						target: 'http://localhost:8080'
					}
				}
			}
		},
		clean: {
			src: ["scripts/*.js", "scripts/*.js.map"]
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['css/*.css'],
				tasks: ['concat:css', 'cachebreaker']
			},
			ts: {
				files: ['scripts/*.ts'],
				tasks: ['tslint', 'ts', 'concat:js', 'clean', 'cachebreaker']
			},
			html: {
				files: ['index.html'],
				tasks: ['concat:html', 'cachebreaker']
			}
		},
		cachebreaker: {
			dev: {
				options: {
					match: [
						{
							'scripts.js': 'build/scripts.js',
							'styles.css': 'build/styles.css'
						}
					],
					replacement: 'md5'
				},
				files: {
					src: ['build/index.html']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['tslint', 'ts', 'concat','clean', 'cachebreaker', 'connect', 'watch']);
};

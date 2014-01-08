module.exports = function(grunt) {
    var skinDir = 'theme/skin/frontend/my-theme/default/';
    var appDir = 'theme/app/design/frontend/my-theme/default/';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: skinDir + 'scss',
                    cssDir: skinDir + 'css',
                    environment: 'development',
                    outputStyle: 'nested'
                }
            }
        },
        clean: {
            images: {
                src: [skinDir + 'images']
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: skinDir + 'images-src/',
                    src: '**/*.{png,jpg,gif}',
                    dest: skinDir + 'images/'
                }]
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                skinDir + ['js/{,*/}*.js', '!js/{,*/}*.min.js']
            ]
        },
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    'theme/skin/frontend/my-theme/default/js/scripts.min.js': [skinDir + 'js/scripts.js']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            livereload: {
                files: [
                    appDir + '**/*.{phtml,xml}',
                    skinDir + 'scss/{,*/}*.scss',
                    skinDir + 'images-src/{,*/}*.{png,jpg,gif}',
                    [skinDir + 'js/*.js', '!' + skinDir + 'js/*.min.js']
                ],
                tasks: [
                    'compass',
                    'clean:images',
                    'imagemin',
                    'jshint',
                    'uglify'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'compass',
        'clean:images',
        'imagemin',
        'jshint',
        'uglify'
    ]);
};

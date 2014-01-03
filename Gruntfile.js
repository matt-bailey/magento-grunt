module.exports = function(grunt) {
    var themeDir = 'theme/skin/frontend/my-theme/default/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: themeDir + 'scss',
                    cssDir: themeDir + 'css',
                    environment: 'development',
                    outputStyle: 'nested'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: themeDir + 'images-src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: themeDir + 'images/'
                }]
            }
        },
        
        watch: {
            options: {
                livereload: true
            },
            livereload: {
                files: [
                    themeDir + 'scss/{,*/}*.scss',
                    themeDir + 'images-src/{,*/}*.{png,jpg,gif}'
                ],
                tasks: ['compass', 'imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'imagemin']);
};

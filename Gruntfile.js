module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['plain.js']
        },
        uglify: {
            options: {
                mangle: true,
                compress: false
            },
            all: {
                
                files: {
                    'min.js': 'plain.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify', 'htmlescape']);

    grunt.registerTask('htmlescape', 'make distribution.', function(){
        var orig = grunt.file.read('min.js',{encoding: 'utf8'});

        var encoded = 'javascript:'+
            orig.
            replace(/"/g, '&quot;').
            replace(/&/g, '&amp;').
            replace(/>/g, '&gt;').
            replace(/</g, '&lt;');

        grunt.file.write('link.txt', encoded, {encoding: 'utf8'});
        
    });
}

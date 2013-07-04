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

    grunt.registerTask('default', ['jshint', 'uglify', 'generatehtml']);

    grunt.registerTask('generatehtml', 'make distribution.', function(){
	var _ = require('underscore');
        var src = 
	    'javascript:'+
	    grunt.file.read('min.js',{encoding: 'utf8'});

	var tmpl = grunt.file.read('index.html.tmpl',{encoding: 'utf8'});

	var html = _.template(tmpl, {url: _.escape(src)});

        grunt.file.write('index.html', html, {encoding: 'utf8'});
        
    });
}

module.exports = function(grunt) {

	var last_html_file;

	grunt.initConfig({
		watch: {
			scripts: {
                files: ['../**/*.html', '../**/*.css'],
                options: {
                    interrupt: true
                }
			},
		},
	});
	
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.event.on('watch', function(action, filepath, target) {
		
		if (filepath.match(/\.html$/)) {
			last_html_file = filepath;
		}

		if (typeof last_html_file === "undefined") {
			grunt.log.writeln("\nPlease modify the HTML file you want exported to PDF");
			return false;
		}

		var exec = require('child_process').exec,
			origin = last_html_file,
			destination = last_html_file.replace(/html$/, 'pdf'),
			command = 'phantomjs rasterize.js "' + origin + '" "' + destination + '" A4';
		

		grunt.log.writeln("\nExporting " + origin + " to " + destination + " ...");
		exec(command, function (error, stdout, stderr) {
			if (error) {
				grunt.log.writeln("Error occurred: " + error);
			} else {
				grunt.log.writeln("Success");
			}
		});

	});

};
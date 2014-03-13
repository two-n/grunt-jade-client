/*
 * grunt-jade-client
 * https://github.com/two-n/grunt-jade-client
 *
 * Copyright (c) 2014 TWO-N, Inc.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var jade = require('jade');
  var fs = require('fs');
  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jadeClient', 'A grunt task to compile jade templates into a javascript file (like templates.js) to use on the client', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      requireJs: false
    });

    // string which will eventually be written as a js file
    var templateString = 'var JST = {};\n';

    // Iterate over key val pairs in source, compile files (with jade) and append to templateString.
    this.files.forEach(function(f) {
      var namespace, fileName;
      var templatesObj = f.orig.src[0]
      for (namespace in templatesObj) {
        fileName = templatesObj[namespace];
        var destPath = path.resolve(fileName);
        var contents = jade.compile(fs.readFileSync(destPath, 'utf8'), { client: true, compileDebug: false, filename: destPath }).toString();
        templateString += "JST['" + namespace + "'] = " + contents + ";\n";
      }

      templateString += 'return JST;\n';

      // // Concat specified files.
      // var src = f.src.filter(function(filepath) {



      //   // Warn on and remove invalid source files (if nonull was set).
      //   if (!grunt.file.exists(filepath)) {
      //     grunt.log.warn('Source file "' + filepath + '" not found.');
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }).map(function(filepath) {
      //   // Read file source.
      //   return grunt.file.read(filepath);
      // }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      if (options.requireJs) {
        templateString = "define(['jade'], function(jade) {\n" + templateString + '});\n';
      }

      // Write the destination file.
      grunt.file.write(f.dest, templateString);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};

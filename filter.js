var fs = require('fs'),
    path = require('path');

module.exports = function(filePath, extension, callback) {

    fs.readdir(filePath, function(err, files) {
        if (err) {
          return callback(err);
        }

        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) == ('.' + extension)) {
                console.log(files[i]);
            }
        }
    });
};

var fs = require('fs'),
    path = require('path');

var pathname = process.argv[2],
    fileExtension = process.argv[3];

fs.readdir(pathname, function(err, files) {
    for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) == ('.' + fileExtension)) {
            console.log(files[i]);
        }
    }
});

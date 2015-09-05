var fs = require('fs'),
    path = process.argv[2];

fs.readFile(path, 'utf8', function(err, contents) {
    var lines = contents.split('\n').length - 1;
    console.log(lines);
});

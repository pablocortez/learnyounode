var fs = require('fs'),
    path = process.argv[2];

var contents = fs.readFileSync(path, 'utf8');
var lines = contents.split('\n').length - 1;
console.log(lines);

var filter = require('./filter');

filter(process.argv[2], process.argv[3], function(err, data) {
    if (!err) {
        data.forEach(function(file) {
            console.log(file);
        });
    } else {
      throw err;
    }
});

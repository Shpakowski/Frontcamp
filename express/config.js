var nconf = require('nconf'),
    fs = require('fs');

    nconf.argv()
        .env()
        .file({ file: './config.json' });

    nconf.set('database', 'mongodb://shpakich:Gwynbleidd88@ds011281.mlab.com:11281/shpakich');

    nconf.save(function (err) {
        fs.readFile('./config.json', function (err, data) {
          console.dir(JSON.parse(data.toString()))
        });
    });
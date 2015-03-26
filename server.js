require('colors');
var path = require('path');
var express = require('express');
var people = require(path.join(__dirname, 'data/people.json'));

var app = express();


app.use('/mockup/', express.static(path.join(__dirname, 'mockup')));
app.get('/api/people', function(req, res) {
    res.end(JSON.stringify(people, null, '    '));
});

var HTTP_PORT = 8080;

app.listen(HTTP_PORT, function(err) {
    if (err) {
        throw err;
    }

    console.log(('HTTP server listening on port ' + HTTP_PORT).green);

    console.log('Mockup:'.bold + ' http://localhost:' + HTTP_PORT + '/mockup/');
    console.log('People data:'.bold + ' http://localhost:' + HTTP_PORT + '/api/people');
});
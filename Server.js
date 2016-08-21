/**
 * A very simple webserver/express setup.
 * It does the following:
 * - listens to port 3000 and returns our template.html on /
 * - maps /js to our /dist folder
 * - maps /css to the css folder in the css folder of the react-content-builder module
 *  (In production you would want to copy the css files into your css folder of your own project)
 */

var express = require('express');
var app = express();
var fs = require('fs');

app.use('/js', express.static('dist'));
app.use('/css', express.static(__dirname + '/node_modules/react-content-builder/css/'));

app.get('/', function(req, res) {
  fs.readFile("template.html", function (err, content) {
    res.send(content.toString());
  });
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
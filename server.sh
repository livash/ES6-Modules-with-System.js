var express = require("express");
var app = express();
app.use(express.static('./'));

// server
var server = app.listen(5000, function() {
    var port = server.address().port;
    console.log('Listening on port', port);
});
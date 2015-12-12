var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);

console.log('Server started: http://localhost:3000/');
 
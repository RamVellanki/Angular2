/*
    This is the main file from which we serve the entire angular App.
 **/

var path = require('path'),
    express = require('express');

var app = express();
var root = '/dist/'
app.use("/", express.static(__dirname+'/dist'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(express.static(root));

app.get('/', function(req, res){
    res.sendFile('index.html');
})

app.listen(8383, () => {
    console.log("Listening on http://localhost:8383");
})
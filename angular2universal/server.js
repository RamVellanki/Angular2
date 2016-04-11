var path = require('path');
var express = require('express');
var angular2_universal_preview_1 = require('angular2-universal-preview');
var app = express();
var root = path.join(path.resolve(__dirname, '..'));
var app_1 = require('./app/app');
app.engine('html', angular2_universal_preview_1.ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(express.static(root));
app.use('/', function (req, res) {
    res.render('index', { App: app_1.App });
});
app.listen(3000, function () {
    console.log("Listening on http://localhost:3000");
});
//# sourceMappingURL=server.js.map
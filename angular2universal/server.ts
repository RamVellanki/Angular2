import * as path from 'path';
import * as express from 'express';
import {ng2engine} from 'angular2-universal-preview';


let app = express();
let root = path.join(path.resolve(__dirname, '..'));

import {App} from './app/app'

app.engine('html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(express.static(root));

app.use('/', function(req, res){
    res.render('index', {App});
})

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
})
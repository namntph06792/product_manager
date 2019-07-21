//Config Express
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

//Config EJS
app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('views', './views');

//Config Multer
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage });

//Start server
const port = process.env.PORT || '3000';
app.listen(port,() => console.log(`Running on localhost:${port}`));

//Config Router/Render
app.get('/', (req, res) => res.render('login'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/charts', (req, res) => res.render('charts'));
app.get('/widgets', (req, res) => res.render('widgets'));
app.get('/tables', (req, res) => res.render('tables'));
app.get('/grid', (req, res) => res.render('grid'));
app.get('/404', (req, res) => res.render('404'));
app.get('/buttons', (req, res) => res.render('buttons'));
app.get('/typography', (req, res) => res.render('typography'));
app.get('/icons', (req, res) => res.render('icons'));
app.get('/navs', (req, res) => res.render('navs'));
app.get('/badges', (req, res) => res.render('badges'));
app.get('/progress', (req, res) => res.render('progress'));
app.get('/forms', (req, res) => res.render('forms'));

//Navigation
app.post('/dashboard',(req, res) => res.redirect('/dashboard'));

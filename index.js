const volleyball = require('volleyball');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//app.use('/', routes);
app.use(volleyball);
app.use(express.static('public'));



// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.get('/', (req, res) => res.render('index.html'));

app.listen(3000, function() {
  console.log('Listening on 3000.');
});

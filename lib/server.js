const express = require('express');
const config = require('./config.js');

const app = express();

app.use(express.static('public'));

// configure express to use ejs as its template language
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

// instead of hardcoding a port, use a config var
app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});


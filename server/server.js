const express = require('express');

// middleware
const morgan = require('morgan');
const parser = require('body-parser');

// router
const router = require('./routes.js');

const app = express();
const defaultPort = require('./config.js').DEFAULT_PORT;
const port = process.env.PORT || defaultPort;

app.set('port', port);

// logging & parsing
app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router);
app.use(express.static(`${__dirname}/../public/build`));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log(`Harambe is listening on port ${app.get('port')}!`);
}

module.exports.app = app;

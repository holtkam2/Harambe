require('dotenv').config();

const express = require('express');

// middleware
const morgan = require('morgan');
const parser = require('body-parser');

// router
const router = require('./routes');

// Stormpath for auth
const stormpath = require('express-stormpath');

const app = express();

app.set('port', process.env.PORT);

// Stormpath init
app.use(stormpath.init(app, {
  apiKey: {
    id: process.env.STORMPATH_CLIENT_APIKEY_ID,
    secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET,
  },
  application: {
    href: process.env.STORMPATH_APPLICATION_HREF,
  },
  website: true, // create /register /login & /logout routes
}));

// logging & parsing
app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router);
app.use(express.static(`${__dirname}/../client`));

app.on('stormpath.ready', () => {
  console.log('Stormpath Ready!');

  app.listen(app.get('port'));
  console.log(`Harambe is listening on port ${app.get('port')}!`);
});

module.exports = app;

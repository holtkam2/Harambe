require('dotenv').config();

const express = require('express');
// middleware
const morgan = require('morgan');
const parser = require('body-parser');
const helmet = require('helmet');
// router
const router = require('./routes');
const helpers = require('./helpers');
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

// Helmet to secure express with various http headers
// Expand later with specific rules for each module
app.use(helmet());

app.use('/', router);
app.use(express.static(`${__dirname}/../client`));

app.on('stormpath.ready', () => {
  // eslint-disable-next-line no-console
  console.log('Stormpath Ready!');

  app.listen(app.get('port'));
  // eslint-disable-next-line no-console
  console.log(`Harambe is listening on port ${app.get('port')}!`);
  helpers.updateAll();
});

module.exports = app;

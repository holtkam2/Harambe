const express = require('express');

// middleware
const morgan = require('morgan');
const parser = require('body-parser');

// router
const router = require('./routes');

// Stormpath for auth
const stormpath = require('express-stormpath');
const stormpathConfig = require('./config').stormpathConfig;

const app = express();
const defaultPort = require('./config').DEFAULT_PORT;

const port = process.env.PORT || defaultPort;

app.set('port', port);

// Stormpath init
app.use(stormpath.init(app, {
  apiKey: {
    id: stormpathConfig.STORMPATH_CLIENT_APIKEY_ID,
    secret: stormpathConfig.STORMPATH_CLIENT_APIKEY_SECRET,
  },
  application: {
    href: stormpathConfig.STORMPATH_APPLICATION_HREF,
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

const router = require('express').Router(); // eslint-disable-line new-cap

// Stormpath for auth
const stormpath = require('express-stormpath');

// routes
router.get('/', stormpath.loginRequired, (req, res) => {
  res.send('Hello, Harambe!');
});

module.exports = router;

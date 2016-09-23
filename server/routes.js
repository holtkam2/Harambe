const router = require('express').Router(); // eslint-disable-line new-cap
const path = require('path');

// Stormpath for auth
const stormpath = require('express-stormpath');

// routes
router.get('/', stormpath.loginRequired, (req, res) => {
  res.sendFile('index.html', {
    root: path.resolve(__dirname, '.././client'),
  });
});

// routes needed
// /login
// /logout
// /settings

module.exports = router;

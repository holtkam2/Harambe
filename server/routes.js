const router = require('express').Router(); // eslint-disable-line new-cap
//const path = require('path');
const helper = require('./helpers');
// Stormpath for auth
const stormpath = require('express-stormpath');

// middleware for testing
// router.use((req, res, next) => {
//   // log each request to the console
//   console.log(req.method, req.url);
// });

// routes
router.get('/', stormpath.loginRequired, helper.getSlash);

// user routes
router.get('/api/users', helper.getAllUsers);
router.post('/api/users', helper.createUser);
router.get('/api/users/:username', helper.getUser);
router.delete('/api/users/:username', helper.deleteUser);
//router.put('/api/users/:username', helper.updateUser);

// button routes
// router.get('/api/buttons', helper.getAllButtons);
// router.post('/api/buttons', helper.createButton);
// router.get('/api/buttons/:buttonname', helper.getButton);
// router.delete('/api/buttons/:buttonname', helper.deleteButton);
//router.put('/api/buttons/:buttonname', helper.updateButton);



module.exports = router;

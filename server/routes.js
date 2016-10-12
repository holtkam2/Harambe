const router = require('express').Router(); // eslint-disable-line new-cap
const helper = require('./helpers');
// Stormpath for auth
const stormpath = require('express-stormpath');

// middleware for testing
// router.use((req, res, next) => {
//   // log each request to the console
//   console.log(req.method, req.url);
// });

// Main routes
router.get('/', stormpath.loginRequired, helper.getSlash);
router.get('/landing', helper.getLand);

router.get('/api/state', stormpath.loginRequired, helper.getState);
router.post('/api/state', stormpath.loginRequired, helper.saveState);

// Test routes
router.get('/api/tests', helper.getAllTests);
router.post('/api/tests', helper.createTest);
router.get('/api/tests/:testname', helper.getTest);
router.delete('/api/tests/:testname', helper.deleteTest);

module.exports = router;

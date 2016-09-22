const router = require('express').Router();

// routes
router.get('/', (req, res) => {
  res.send('Hello, Harambe!');
});

module.exports = router;

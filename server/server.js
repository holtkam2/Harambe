// Server init
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Harambe!');
});

app.listen(3000, () => {
  console.log('Harambe is listening on port 3000!');
});

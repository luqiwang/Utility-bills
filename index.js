const express = require('express');
const app = express();
const utilData = require('./utilData.json')

app.get('/api/utils', (req, res) => {
  res.json(utilData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

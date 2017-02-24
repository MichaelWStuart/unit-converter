const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const convert = require('./convert.js')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.ico'));
});

app.get('/api/convert', (req, res) => {
  const data = req.query.input;
  res.send(convert(data));
})

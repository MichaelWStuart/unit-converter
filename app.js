const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.ico'));
});

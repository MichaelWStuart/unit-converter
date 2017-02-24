const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
const PORT = process.env.PORT || 8080;

const convert = (data) => {
  const divider = () => data.search(/[a-z]/);
  const initNum = data.slice(0, divider());
  const initUnit = data.slice(divider());
  let returnNum;
  let returnUnit;
  let initWord;
  let returnWord;
  switch (initUnit) {
    case 'kg':
      returnNum = initNum * 2.20462;
      returnUnit = 'lbs';
      initWord = 'kilograms';
      returnWord = 'pounds';
      break;
    // case 'ft':
    //   // = 0.3048ft
    //   break;
    // case 'km':
    //   // = 0.6214 mile
    //   break;
    // case 'mi':
    //   // = 1.6093 km
    //   break;
    // case 'ha':
    //   // = 2.4711 acres
    //   break;
    // case 'ac':
    //   // = 0.404686 hectares
    //   break;
    // case 'l':
    //   // = 33.814 ouce
    //   break;
    // case 'oz':
    //   // = 0.0295735 liter
    //   break;
    default: return null;
  }
  const string = `${initNum} ${initWord} converts to ${returnNum} ${returnWord}`;
  return {'initNum':initNum,'initUnit':initUnit,'returnNum':returnNum,'returnUnit':returnUnit,'string':string};
}

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));

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
  const outgoing = convert(data)
  res.send(convert(data));
})

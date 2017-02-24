const convert = (data) => {
  const divider = () => data.search(/[a-zA-Z]/);
  const initUnit = data.slice(divider());
  let initNum = data.slice(0, divider());
  let conversionFactor;
  let returnUnit;
  let initWord;
  let returnWord;
  let string;
  let isValidUnit = true;
  let isValidNumber = true;
  if (initNum.length === 0) {
    initNum = 1;
  }
  if (isNaN(initNum)) {
    isValidNumber = false;
  }
  switch (initUnit) {
    case 'kg':
      conversionFactor = 2.2046;
      returnUnit = 'lbs';
      initWord = initNum === 1 ? 'kilogram' : 'kilograms';
      returnWord = 'pounds';
      break;
    case 'lb':
      conversionFactor = 0.3048;
      returnUnit = 'ft';
      initWord = initNum === 1 ? 'pound' : 'pounds';
      returnWord = 'kilograms';
      break;
    case 'km':
      conversionFactor = 0.6214;
      returnUnit = 'mi';
      initWord = initNum === 1 ? 'kilometer' : 'kilometers';
      returnWord = 'miles';
      break;
    case 'mi':
      conversionFactor = 1.6093;
      returnUnit = 'km';
      initWord = initNum === 1 ? 'mile' : 'miles';
      returnWord = 'kilometers';
      break;
    case 'L':
      conversionFactor = 0.2641;
      returnUnit = 'gal';
      initWord = initNum === 1 ? 'liter' : 'liters';
      returnWord = 'gallons';
      break;
    case 'gal':
      conversionFactor = 3.7854;
      returnUnit = 'L';
      initWord = initNum === 1 ? 'gallon' : 'gallons';
      returnWord = 'liters';
      break;
    default: isValidUnit = false;
  }
  if(!isValidNumber || !isValidUnit) {
    if(!isValidNumber) {
      if(!isValidUnit) {
        string = 'invalid number and unit';
      } else {
        string = 'invalid number';
      }
    } else {
      string = 'invalid unit';
    }
    return {'initNum':initNum,'initUnit':initUnit,'string':string}
  }
  const returnNum = initNum * conversionFactor;
  string = `${initNum} ${initWord} converts to ${returnNum} ${returnWord}`;
  return {'initNum':initNum,'initUnit':initUnit,'returnNum':returnNum,'returnUnit':returnUnit,'string':string};
}

module.exports = convert;

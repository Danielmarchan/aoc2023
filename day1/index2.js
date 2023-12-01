const fs = require('fs');

const inputData = fs.readFileSync('./day1/input.txt', 'utf8');
const lines = inputData.split('\n');
const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const spelledOutDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const permittedDigits = [ ...digits, ...spelledOutDigits];
let calibrationValuesSum = 0;

lines.forEach((line) => {
  const calibrationValue = findCalibrationValue(line);
  calibrationValuesSum += calibrationValue;
});

console.log('Answer Part Two: ' + calibrationValuesSum);

/*
* Helper Functions
*/
function findCalibrationValue(line) {
  let firstDigitIndex = -1;
  let lastDigitIndex = -1;
  let firstDigit;
  let lastDigit;
  permittedDigits.forEach((digit) => {
    if (line.includes(digit)) {
      // get first digit
      if (line.indexOf(digit) < firstDigitIndex || firstDigitIndex === -1)  {
        firstDigitIndex = line.indexOf(digit);
        firstDigit = digit;
      };
      // get last digit
      if (line.lastIndexOf(digit) > lastDigitIndex || lastDigitIndex === -1) {
        lastDigitIndex = line.lastIndexOf(digit);
        lastDigit = digit;
      }
    }
  });

  const firstDigitInt = getIntEvenIfSpelledOut(firstDigit);
  const lastDigitInt = getIntEvenIfSpelledOut(lastDigit);

  return parseInt(firstDigitInt + '' + lastDigitInt) || 0;
}

function getIntEvenIfSpelledOut(string) {
  return parseInt(string) || spelledOutDigits.indexOf(string) + 1;
}

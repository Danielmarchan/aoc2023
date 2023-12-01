const fs = require('fs');

const inputData = fs.readFileSync('./day1/input.txt', 'utf8');
const lines = inputData.split('\n');
let calibrationValuesSum = 0;

lines.forEach((line) => {
  const calibrationValue = findCalibrationValue(line);
  calibrationValuesSum += calibrationValue;
});

console.log('Answer Part One: ' + calibrationValuesSum);

/*
* Helper Functions
*/
function findCalibrationValue(line) {
  let firstDigit;
  let lastDigit;

  // get first digit
  for (let i = 0; i < line.length; i++) {
    const charInt = parseInt(line[i]);
    if (charInt) {
      firstDigit = charInt;
      break;
    };
  };

  // get last digit
  for (let i = line.length; i >= 0; i--) {
    const charInt = parseInt(line[i]);
    if (charInt) {
      lastDigit = charInt;
      break;
    };
  };

  return parseInt(firstDigit + '' + lastDigit) || 0;
}

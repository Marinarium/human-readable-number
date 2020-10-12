module.exports = function toReadable (number) {
  const oneWordNumbers = ['', 'one', 'two', 'three', 'four', 
  'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 
  'fourteen', 'fifteen', 'sixteen','seventeen', 
  'eighteen', 'nineteen'];

  const dozens = ['', '', 'twenty', 'thirty', 'forty', 
  'fifty', 'sixty', 'seventy', 'eighty','ninety'];

  let numberStr = number.toString();

  if (number < 20) {
    if (number === 0) {
        return 'zero';
    } else {
        return oneWordNumbers[number];
    }
  } else if ( numberStr.length === 2){
    return (dozens[numberStr[0]] + ' ' + oneWordNumbers[numberStr[1]]).trim();
  } else if (numberStr.length == 3) {
    if (numberStr[1] === '0' && numberStr[2] === '0'){
        return oneWordNumbers[numberStr[0]] + ' hundred';
    } else if(numberStr[1] === '1'){
        return oneWordNumbers[numberStr[0]] + ' hundred ' + oneWordNumbers[+(numberStr.slice(1,3))];
    } else if (numberStr[1] === '0' && +numberStr[2] > 0) {
        return (oneWordNumbers[numberStr[0]] + ' hundred ' + oneWordNumbers[numberStr[2]]).trim();
    } else {
        return (oneWordNumbers[numberStr[0]] + ' hundred ' + dozens[numberStr[1]] + ' ' + oneWordNumbers[numberStr[2]]).trim();
    }
  }
}

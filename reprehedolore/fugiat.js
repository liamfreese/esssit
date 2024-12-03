const randomValues = ['a', 'b', 'c', 'd'];

const concatenatedString = randomValues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, '');

console.log(concatenatedString); // Output: 'abcd'

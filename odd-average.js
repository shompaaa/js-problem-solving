function oddAverage(numbers) {
  const oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }

  let oddTotal = 0;
  for (const oddNumber of oddNumbers) {
    oddTotal = oddNumber + oddTotal;
  }

  const oddAverage = oddTotal / oddNumbers.length;
  return oddAverage;
}

const numbers = [12, 43, 49, 50, 117, 128, 45];
const avg = oddAverage(numbers);
console.log('The average of odd number is:',avg);

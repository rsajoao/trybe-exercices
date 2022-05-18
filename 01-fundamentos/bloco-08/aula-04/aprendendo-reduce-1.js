const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//    SOMANDO OS NÚMEROS PARES COM filter E reduce
const sumEven = (acc, number) => acc + number;
const result = numbers.filter((number) => number % 2 === 0).reduce(sumEven, 0);
console.log(result);

//    SOMANDO OS NÚMEROS ÍMPARES COM reduce APENAS
const sumPair = (acc, number) => (number % 2 !== 0) ? acc + number : acc;
console.log(numbers.reduce(sumPair, 0));
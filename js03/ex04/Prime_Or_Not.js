const readlineSync = require(`readline-sync`),
    checkPrime = require(`../ex04/checkPrime`);
let number = Number(readlineSync.question(`Input any number: `)),
    i = 0;

console.log(checkPrime(number) ? `${number} is prime number` : `${number} is not prime number`);
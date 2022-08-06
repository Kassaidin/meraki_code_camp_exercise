const readlineSync = require(`readline-sync`),
    doFactorial = require(`../ex01/f(x)doFactorial`);
let number = Number(readlineSync.question(`Input number: `));
console.log(`Factorial: ${doFactorial(number)}`);
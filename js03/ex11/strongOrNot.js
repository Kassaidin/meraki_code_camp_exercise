const input = require(`readline-sync`),
    checkStrongNumber = require(`../ex11/checkStrongNumber`);
let number = Number(input.question(`Input number: `));
console.log(checkStrongNumber(number) ? `${number} is STRONG NUMBER` : `${number} is not STRONG NUMBER`);
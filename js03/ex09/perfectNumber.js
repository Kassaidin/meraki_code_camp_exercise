const input = require(`readline-sync`),
    checkPerfectNumber = require(`../ex09/checkPerfectNum`);
let number = Number(input.question(`Input any number: `));
console.log(checkPerfectNumber(number) ? `${number} is PERFECT NUMBER` : `${number} is not PERFECT NUMBER`);
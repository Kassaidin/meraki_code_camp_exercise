const input = require(`readline-sync`),
    checkNumberThatIsArmStrongOrNot = require(`../ex07/checkArmstrongFunction`);
let number = Number(input.question(`Input number: `));
console.log(checkNumberThatIsArmStrongOrNot(number) ? `${number} is armstrong number` : `${number} is not armstrong number`);
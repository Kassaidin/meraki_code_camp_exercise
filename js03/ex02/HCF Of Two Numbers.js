const readlineSync = require(`readline-sync`);
let firstNumber = Number(readlineSync.question(`Input first number: `)),
    secondNumber = Number(readlineSync.question(`Input second number: `)),
    i = 0,
    HCF;

while (i <= firstNumber && i <= secondNumber) {
    if (firstNumber % i == 0 && secondNumber % i == 0) {
        HCF = i;
    }
    i++;
}

console.log(` HCF of ${firstNumber} and ${secondNumber}: ${HCF}`)
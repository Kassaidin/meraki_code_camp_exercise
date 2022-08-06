const readlineSync = require(`readline-sync`);
let firstNumber = Number(readlineSync.question(`Input number1: `)),
    secondNumber = Number(readlineSync.question(`Input number2: `)),
    i = firstNumber >= secondNumber ? firstNumber : secondNumber,
    LCM = 1;

while (i >= 0) {
    if (secondNumber % i === 0 && firstNumber % i === 0) {
        secondNumber /= i;
        firstNumber /= i;
        LCM *= i;
    }
    i--;
}
LCM *= (secondNumber * firstNumber);
console.log(`LCM = ${LCM}`);
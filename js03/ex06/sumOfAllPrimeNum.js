const checkPrime = require(`../ex04/checkPrime`),
    input = require(`readline-sync`);
let lowerLimit = Number(input.question(`Input lower limit: `)),
    upperLimit = Number(input.question(`Input upper limit: `)),
    sum = 0,
    lowerConstant = lowerLimit,
    upperConstant = upperLimit;

process.stdout.write(`sum of prime numbers between ${lowerLimit} - ${upperLimit}: `)
while (lowerLimit < upperLimit) {
    sum = checkPrime(lowerLimit) && lowerConstant != lowerLimit ? sum + lowerLimit : sum;
    lowerLimit++;
}

process.stdout.write(`${sum} `)
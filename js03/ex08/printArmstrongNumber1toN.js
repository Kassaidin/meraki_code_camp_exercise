const checkPrime = require(`../ex07/checkArmstrongFunction`),
    input = require(`readline-sync`);
let lowerLimit = Number(input.question(`Enter lower limit: `)),
    upperLimit = Number(input.question(`Enter upper limit: `)),
    key = 0;

console.log(`Armstrong number between ${lowerLimit} to ${upperLimit} are: `)
while (lowerLimit <= upperLimit) {
    process.stdout.write(`${checkPrime(lowerLimit) && 0 === key? `${lowerLimit}` : ``}`);
    process.stdout.write(`${checkPrime(lowerLimit) && key ? `, ${lowerLimit}` : ``}`);
    key =  checkPrime(lowerLimit) ? 1 : key;
    lowerLimit++;
}
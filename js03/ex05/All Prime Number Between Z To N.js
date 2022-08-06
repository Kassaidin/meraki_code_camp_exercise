const input = require(`readline-sync`),
    checkPrime = require(`../ex04/checkPrime`);
let lower = Number(input.question(`Input lower limit: `)) + 1,
    limit = Number(input.question(`Input upper limit: `)),
    key = lower;

process.stdout.write(`Prime number from ${lower} to ${limit}: `);
while (lower <= limit) {
    process.stdout.write(`${checkPrime(lower) ? `${lower} ` : ``}`);
    lower++;
}
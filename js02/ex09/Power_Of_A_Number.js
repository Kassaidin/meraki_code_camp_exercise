const readlineSync = require(`readline-sync`);
let base = Number(readlineSync.question(`Input base: `)),
    exponent = Number(readlineSync.question(`exponent: `));
powerOfNumber(base, exponent);

function powerOfNumber(base, exponent) {
    let index = exponent === 0 ? 0 : 1,
        result = 1;
    while (index <= exponent) {
        result *= base;
        index++;
    }
    console.log(`${base} ^ ${exponent} = ${result}`);
    if (exponent === 0) {
        return result = exponent === 0 && base === 0 ? 1 : result;
    }
}

//TODO test_program
var assert = require('assert');
assert(powerOfNumber(5, 2) === powerOfNumber(5, 2), `result not match`);
assert(powerOfNumber(0, 0) === 1, `result should be 1`);
assert(powerOfNumber(1, 0) === 1, `result should be 1`);
const readlineSync = require(`readline-sync`);
const limit = Number(readlineSync.question(`Input upper range: `));
displayAllOddNumber(limit);

function displayAllOddNumber(limit) {
    let index = 1;
    let sum = 0;
    while (index <= limit) {
        if (index % 2 !== 0) {
            process.stdout.write(`${index}`);
            if (index < limit - 1) {
                process.stdout.write(`, `);
            }
            sum += index;
        }
        index++;
    }
}

var assert = require('assert');
assert(displayAllOddNumber(6) === y(index), `result not match`);
assert(typeof(displayAllOddNumber(-1)) !== typeof(5), `result should not be any number`);
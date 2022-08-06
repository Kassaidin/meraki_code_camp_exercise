/**
>Input
Input upper range: 10

>Output
Even numbers between 1 to 10:
0, 2, 4, 6, 8, 10
 */
// const readlineSync = require(`readline-sync`);
// const limit = Number(readlineSync.question(`Input upper range: `));

displayAllEvenNumber(10);

function displayAllEvenNumber(limit) {
    let index = 0;
    let sum = 0;
    process.stdout.write(`Even numbers between 1 to ${limit}: `);
    while (index <= limit) {
        if (index % 2 === 0) {
            process.stdout.write(`${index}`);
            if (index < limit - 1) {
                process.stdout.write(`, `);
            }
            sum += index;
        }
        index++;
    }
    return sum;
}
// TODO
// var assert = require('assert');
// assert(displayAllEvenNumber(6) === y(index), `result not match`);
// assert(typeof(displayAllEvenNumber(-1)) !== typeof(5), `result should not be any number`);
// var readlineSync = require('readline-sync');
// const limit = Number(readlineSync.question('Input upper limit: '));
// //*valuable

// displayNaturalNumber(limit);

function displayNaturalNumber(limit) {
    let index = 1;
    let sum = 0;
    process.stdout.write(`Natural numbers from 1 to ${limit}: `);
    //* while loop
    if (limit < 0) {
        // return undefined;
    }
    while (index <= limit) {
        process.stdout.write(`${index}`);
        if (index !== limit) {
            process.stdout.write(`, `);
        }
        sum += index;
        index++;
    }
    return sum;
}

function testCase() {

}
// TODO evaluate
var assert = require('assert');
// assert(displayNaturalNumber(2) === testCase(6), `result not match`);
// assert(displayNaturalNumber(1) === testCase(1), `result not match`);
assert(typeof(displayNaturalNumber(-1)) !== typeof(5), `result should not be any number`);
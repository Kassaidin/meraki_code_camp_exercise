// var readlineSync = require(`readline-sync`);
// let startNumber = readlineSync.question(`Input N: `);

// displayNaturalNumberReverse(startNumber);

function displayNaturalNumberReverse(startNumber) {
    let sum = 0;
    console.log(`Natural numbers from ${startNumber}-1 in reverse:`);
    //* while-loop
    while (startNumber > 0) {
        process.stdout.write(`${startNumber}`);
        if (startNumber > 1) {
            process.stdout.write(`, `);
        }
        sum += startNumber;
        startNumber--;
    }
}

function testCase() {

}

// TODO evaluate
var assert = require('assert');
assert(displayNaturalNumberReverse(2) === testCase(6), `result not match`);
assert(displayNaturalNumberReverse(1) === testCase(1), `result not match`);
assert(typeof(displayNaturalNumberReverse(-1)) !== typeof(5), `result should not be any number`);
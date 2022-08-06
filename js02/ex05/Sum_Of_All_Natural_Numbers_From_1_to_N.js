// const readlineSync = require(`readline-sync`);
// let limit = Number(readlineSync.question(`Input upper limit: `));
//TODO sol1
// //* valuable
// let sum = 0;
// //* while loop
// while (limit > 0) {
//     sum += limit;
//     limit--;
//     console.log(limit);
// }
// console.log(`${sum}`);
//TODO sol2

function sumOfAllNaturalNumberFrom1toN(limit) {
    let sum = i = 0;
    while (i <= limit) {
        sum += i;
        i++;
    }
    return sum;
}

//TODO 
var assert = require('assert');
assert(sumOfAllNaturalNumberFrom1toN(6) === y(index), `result not match`);
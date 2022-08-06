const readlineSync = require(`readline-sync`);
let limit = constant = Number(readlineSync.question(`Input upper limit of even number: `));
//TODO solution1
// let sum = 0;
// while (limit > 0) {
//     sum = limit % 2 !== 0 ? sum + limit : sum;
//     limit--;
// }
// console.log(`Sum of even numbers between 1 to ${constant}: ${sum}`)
//TODO solution2
// let sum = i = 0;
// while (limit >= i) {
//     sum = i % 2 !== 0 ? sum + i : sum;
//     i++;
// }
// console.log(`Sum of even numbers between 1 to ${constant}: ${sum}`)
//TODO solution3
sumOfAllOddNumber(limit);

function sumOfAllOddNumber(limit) {
    let sum = i = 0;
    while (limit >= i) {
        sum = i % 2 !== 0 ? sum + i : sum;
        i++;
    }
    return sum;
}
//todo
let assert = require(`assert`);
assert(sumOfAllOddNumber(10) === , `result not match`);
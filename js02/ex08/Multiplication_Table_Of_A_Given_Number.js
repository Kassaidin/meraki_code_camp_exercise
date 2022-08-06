// const readlineSync = require(`readline-sync`);
// let num = Number(readlineSync.question(`Input num: `));
//TODO solution1
// let i = 1;
// while (i <= 10) {
//     console.log(`${num} * ${i} = ${num * i}`);
//     i++;
// }
//TODO solution2
// function dummy(num) {
//     let i = 10;
//     while (i > 0) {
//         console.log(`${num} * ${11 - i} = ${num * (11-i)}`);
//         i--;
//     }
// }

// //TODO solution3
// function createMultipicationTable(number, i = 0) {
//     if (i > 10) {
//         return;
//     }
//     console.log(`${number} * ${i} = ${number * i}`);
//     i++;
//     createMultipicationTable(number, i)
// }

// createMultipicationTable(num, 1);
// createMultiplicationTable(num);

console.log(createMultiplicationTable(10));

function createMultiplicationTable(num) {
    //? result ไม่ได้ประกาศประเภทจึงขึ้น undefinded
    let i = 1;
    let result = ``;
    while (i <= 10) {
        result += `${num} * ${i} = ${num * i} \n`;
        i++;
    }
    return result;
}
// //TODO
var assert = require('assert');
// assert(createMultiplicationTable(num) === /**รอของเพื่อน*/ , `result not match`);
// assert(typeof(createMultiplicationTable(num)) === typeof(1), `result type should be number`);
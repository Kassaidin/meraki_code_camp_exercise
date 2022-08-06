const variables = require(`../ex13/number_pattern_in`),
    input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)),
    columns = Number(input.question(`Input columns: `)),
    topLength = rows.toString().repeat(columns).length, //? make largest number repeat for columns time then count length
    freeSpace = " ",
    n = rows.toString().length;
const doPattern1 = () => {
    let digitPrint = "",
        number = rows;
    for (j = 1; j <= columns; j++) {
        process.stdout.write(`${ (" ").repeat(n - number.toString().length) + number  }`);
        digitPrint += number + (" ").repeat(n - number.toString().length);
        number = j < i ? number - 1 : number;
    }
    process.stdout.write(`${ freeSpace.repeat(Number(topLength + 3 - digitPrint.length))}`); //? find the different of empty beteween largest digit and digit in that loop
}
const doPattern2 = () => {
    let digitPrint = "",
        number = rows - i + 1;
    for (j = 1; j <= columns; j++) {
        process.stdout.write(`${number + (" ").repeat(n - number.toString().length)}`);
        number = j > columns - i ? number + 1 : number;
        digitPrint += number + (" ").repeat(n - number.toString().length);
    }
    process.stdout.write(`${ freeSpace.repeat(Number(topLength + 3 - digitPrint.length))}`);
}

const doPattern3 = () => {
    let digitPrint = "",
        number = rows;
    for (j = 1; j <= columns; j++) {
        process.stdout.write(`${(" ").repeat(n - number.toString().length) + number }`);
        digitPrint += number + (" ").repeat(n - number.toString().length);
        number = j <= columns - i ? number - 1 : number;
    }
    process.stdout.write(`${ freeSpace.repeat(Number(topLength + 3 - digitPrint.length))}`);
}
const doPattern4 = () => {
    let digitPrint = "",
        number = i;
    for (j = 1; j <= columns; j++) {
        number = j > i ? number + 1 : number;
        digitPrint += number + (" ").repeat(n - number.toString().length);
        process.stdout.write(`${number + (" ").repeat(n - number.toString().length)}`);
    }
    process.stdout.write(`${ freeSpace.repeat(Number(topLength + 3 - digitPrint.length))}`);
}

module.exports = { doPattern1, doPattern2, doPattern3, doPattern4, rows }
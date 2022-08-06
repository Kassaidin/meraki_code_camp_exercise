const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)),
    columns = Number(input.question(`Input columns: `)),
    topLength = rows.toString().repeat(columns).length,
    n = rows.toString().length;
const doPattern1 = () => {
    let number = i,
        digitPrint = "";
    for (j = 1; j <= columns; j++) {
        process.stdout.write(`${number + (" ").repeat(n - number.toString().length)}`);
        digitPrint += number + (" ").repeat(n - number.toString().length)
        number = number < columns ? number + 1 : number;
    }
    process.stdout.write(`${((" ").repeat(Number(topLength - digitPrint.length  + 2)))}`);
}

const doPattern2 = () => {
    let number = rows - i + 1;
    for (j = 1; j <= columns; j++) {
        process.stdout.write(`${number + (" ").repeat(n - number.toString().length)}`);
        number = number < columns ? number + 1 : number;
    }
    process.stdout.write(``);
}
module.exports = { doPattern1, doPattern2, rows };
const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)) - 1,
    columns = Number(input.question(`Input columns: `)) - 1;
for (i = 0; i <= rows; i++) {
    for (j = 0; j <= columns; j++) {
        if (i === 0 || i === rows || j === 0 || j === columns) {
            process.stdout.write(j === 0 && i === 0 || j === columns && i === 0 || j === 0 && i === rows || j === columns && i === rows ? `0` : `1`);
        } else {
            process.stdout.write(`0`);
        }
    }
    console.log(``);
}
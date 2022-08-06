const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)),
    columns = Number(input.question(`Input columns: `));
for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
            process.stdout.write(`1`);
        } else {
            process.stdout.write(`0`);
        }
    }
    console.log(``);
}
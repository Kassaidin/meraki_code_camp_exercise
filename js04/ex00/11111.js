const input = require(`readline-sync`);
let row = Number(input.question(`Input rows: `)),
    column = Number(input.question(`Input columns: `));

for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
        process.stdout.write(`1`);
    }
    console.log(``);
}
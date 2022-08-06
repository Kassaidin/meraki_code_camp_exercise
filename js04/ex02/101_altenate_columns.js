const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)),
    columns = Number(input.question(`Input columns: `));
for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
        process.stdout.write(j % 2 === 0 ? `0` : `1`);
    }
    console.log(``);
}
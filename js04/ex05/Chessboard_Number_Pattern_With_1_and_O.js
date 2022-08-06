const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)),
    columns = Number(input.question(`Input columns: `));
for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
        if (i % 2 === 0) {
            process.stdout.write(j % 2 === 0 ? `1` : `0`);
        } else {
            process.stdout.write(j % 2 === 0 ? `0` : `1`);
        }
    }
    console.log(``);
}
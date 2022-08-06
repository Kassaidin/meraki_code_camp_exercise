const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)) - 1,
    columns = Number(input.question(`Input columns: `)) - 1;
for (i = 0; i <= rows; i++) {
    for (j = 0; j <= columns; j++) {
        process.stdout.write(`${i + 1}`);
    }
    console.log(``);
}
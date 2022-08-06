const input = require(`readline-sync`);
let rows = columns = (5 * 2) - 1,
    number = 6; // Number(input.question(`Input N: `));

for (i = 1; i <= rows; i++) {
    number = 5
    for (j = 1; j <= columns; j++) {
        if (j < i && j != 1 || j != columns) {
            number = number - 1
        }
        process.stdout.write(`${number}`);

    }
    console.log(``);
}
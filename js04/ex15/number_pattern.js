const input = require(`readline-sync`);
let rows = columns = Number(input.question(`Input N: `));

for (i = 1; i <= rows; i++) {
    let number = i;
    for (j = 1; j <= columns; j++) {
        if (j > columns - i + 1) {
            number = j === columns - i + 2 ? i - 1 : number;
            process.stdout.write(`${number}`);
            number--;
        } else {
            process.stdout.write(`${number}`);
            number++;
        }
    }
    console.log(``);
}
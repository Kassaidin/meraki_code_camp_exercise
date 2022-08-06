const input = require(`readline-sync`);
let rows = columns = Number(input.question(`Input N: `));

for (i = 1; i <= rows; i++) {
    let number = i + 1;
    for (j = 1; j <= columns; j++) {
        number = j > i ? number + 1 : number - 1;
        process.stdout.write(`${number}`);
    }
    console.log(``);
}
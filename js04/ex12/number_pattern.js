const input = require(`readline-sync`);
let rows = Number(input.question(`Input rows: `)) - 1,
    columns = Number(input.question(`Input columns: `)) - 1,
    digit = (rows * columns).toString().length,
    freeSlot = [],
    constant = 10,
    number = 1;
for (i = 0; i < digit; i++) {
    freeSlot[i] = ` `;
}
for (i = 0; i <= rows; i++) {
    for (j = 0; j <= columns; j++, number++) {
        process.stdout.write(`${number + freeSlot.toString().replaceAll(`,`,``)}`);
        if (number >= constant) {
            freeSlot.length = digit - 1;
            constant *= 10;
        }
    }
    console.log(``);
}
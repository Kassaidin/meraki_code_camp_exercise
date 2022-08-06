const readlineSync = require(`readline-sync`);
let num = Number(readlineSync.question(`Input number: `)),
    i = 0;

process.stdout.write(`Factors of ${num}: `);
while (i <= num) {
    if (num % i === 0) {
        process.stdout.write(`${i}`);
        if (i < num) {
            process.stdout.write(`, `);
        }
    }
    i++;
}
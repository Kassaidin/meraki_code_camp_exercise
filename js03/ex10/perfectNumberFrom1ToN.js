const checkPerfect = require(`../ex09/checkPerfectNum`),
    input = require(`readline-sync`);
let i = 1,
    number = input.question(`Input upper limit: `),
    key = 0;
process.stdout.write(`Perfect numbers between 1 to ${number}: `);
while (i < number) {
    process.stdout.write(`${checkPerfect(i) && key === 0 ? i : ``}`);
    process.stdout.write(`${checkPerfect(i) && key ? `, ${i}` : ``}`);
    key = checkPerfect(i) ? 1 : key;
    i++;
}
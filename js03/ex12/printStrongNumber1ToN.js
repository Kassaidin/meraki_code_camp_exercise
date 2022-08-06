const input = require(`readline-sync`),
    checkStrongNumber = require(`../ex11/checkStrongNumber`);
//TODO let limit = Number(input.question(`Input upper limit: `));
let limit = 1000,
    i = 1,
    key = 0;
console.log(`Strong numbers between 1-${limit}: `);
while (i <= 1000) {
    process.stdout.write(`${checkStrongNumber(i) && key === 0 ? i : ``}`);
    process.stdout.write(`${checkStrongNumber(i) && key ? `, ${i}` : ``}`); 
    key = 1;
    i++;
}
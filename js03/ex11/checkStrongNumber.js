const factorial = require(`../ex01/f(x)doFactorial`);
module.exports = checkStrongNumber = (number) => {
    let i = n = 1,
        sum = 0,
        constant = number;
    while (number / i > 10) {
        n += 1;
        i *= 10;
    }
    while (number / i !== 0) {
        sum += factorial(Math.floor(number / i));
        number %= i;
        i /= 10;
    }
    return sum === constant ? true : false;
}
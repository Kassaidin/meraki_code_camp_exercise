module.exports = function checkPerfectNumber(number) {
    let i = 0,
        sum = 0;
    while (i <= number / 2) {
        sum = number % i === 0 ? sum + i : sum;
        i++;
    }
    return sum === number ? true : false;
}
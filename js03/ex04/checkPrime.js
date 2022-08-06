module.exports = function checkPrime(number) {
    let i = 0;
    while (i < number) {
        if (number % i === 0 && i != 1 || number === 1) {
            return false;
        }
        i++;
    }
    return true;
}
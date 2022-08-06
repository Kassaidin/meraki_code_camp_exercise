module.exports = function doFactorial(number) {
    let i = 1,
        answer = 1;
    while (i <= number) {
        answer *= i;
        i++;
    }
    return answer;
}
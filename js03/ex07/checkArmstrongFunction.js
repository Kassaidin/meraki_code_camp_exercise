module.exports = function checkNumberThatIsArmStrongOrNot(number) {
    number = number.toString();
    let i = sum = 0;
    while (i < number.length) {
        sum += Math.pow(number[i], number.length);
        i++;
    }
    return sum == number ? true : false;
}
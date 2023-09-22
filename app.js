function factorial(num) {
    if (num < 0) {
        return "error"
    }
    else if (num === 0) {
        return 1
    }
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;


    }
    return result;
}
n= +prompt("enter any number");

document.write(factorial(n));
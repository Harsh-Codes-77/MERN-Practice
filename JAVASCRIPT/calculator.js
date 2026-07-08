function calc(x, y, operation) {
    return operation(x, y);

}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function modulo(a, b){
    return a % b;
}

function average(a, b){
    return (a + b) / 2;
}

function power(a, b){
    return Math.pow(a, b);
}

console.log(calc(10, 5, add));
console.log(calc(10, 5, subtract));
console.log(calc(10, 5, multiply));
console.log(calc(10, 5, divide));
console.log(calc(10, 6, modulo));
console.log(calc(10, 5, average));
console.log(calc(10, 5, power));
//  Operators in JavaScript:
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Assignment Operators: =, +=, -=, *=, /=, %=
// 3. Comparison / Relational Operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators: &&, ||, !
// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// 6. Ternary Operator: condition ? expr1 : expr2
// 7. Unary Operators: typeof, void, delete
// 8. Type Operators: typeof, instanceof

// Arithmetic Operators are used to perform arithmetic operations on numbers. For example:
var num1 = 10;
var num2 = 3;

console.log(num1 + num2); // Addition: 13
console.log(num1 - num2); // Subtraction: 7
console.log(num1 * num2); // Multiplication: 30
console.log(num1 / num2); // Division: 3.3333333333333335
console.log(num1 % num2); // Modulus: 1
console.log(++num1); // Increment: 11
console.log(--num2); // Decrement: 2

// Assignment Operators are used to assign values to variables. For example:
var a = 5;
a += 3; // Equivalent to a = a + 3
console.log(a); // 8

a -= 2; // Equivalent to a = a - 2
console.log(a); // 6

a *= 4; // Equivalent to a = a * 4
console.log(a); // 24

a /= 6; // Equivalent to a = a / 6
console.log(a); // 4

a %= 3; // Equivalent to a = a % 3
console.log(a); // 1

// Comparison Operators are used to compare two values. For example:
var x = 10;
var y = "10";

console.log(x == y); // true (loose equality, type coercion) just checks the value not the type
console.log(x === y); // false (strict equality, no type coercion) checks both value and type
console.log(x != y); // false (loose inequality) checks only value
console.log(x !== y); // true (strict inequality) checks both value and type
console.log(x > 5); // true
console.log(x < 15); // true
console.log(x >= 10); // true
console.log(x <= 10); // true

// Logical Operators are used to combine multiple conditions. For example:
var a = true;
var b = false;

console.log(a && b); // false (logical AND)
console.log(a || b); // true (logical OR)
console.log(!a); // false (logical NOT)

// Bitwise Operators are used to perform bit-level operations on numbers. For example:
var m = 5; // 0101 in binary
var n = 3; // 0011 in binary

console.log(m & n); // 1 (0001 in binary) and operator
console.log(m | n); // 7 (0111 in binary) or operator
console.log(m ^ n); // 6 (0110 in binary) using XOR operator
console.log(~m); // -6 (inverts the bits) using two's complement representation
console.log(m << 1); // 10 (1010 in binary, left shift) multiplies by 2
console.log(m >> 1); // 2 (0010 in binary, right shift) divides by 2

// Ternary Operator is a shorthand for an if-else statement. For example:
var age = 18;
var canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

// Type Operators are used to check the type of a variable or object. For example:
var myVar = "Hello";
console.log(typeof myVar); // "string"

var myObj = {};
console.log(myObj instanceof Object); // true


// Unary Operators are operators that take a single operand and perform an operation. For example:

// Postfix Increment: x++
var x = 5;
console.log(x++); // 5 (returns the value before incrementing)
console.log(x);   // 6 (value after incrementing)

// Prefix Increment: ++x
var y = 5;
console.log(++y); // 6 (increments first, then returns the value)

// Postfix Decrement: x--
var z = 5;
console.log(z--); // 5 (returns the value before decrementing)
console.log(z);   // 4 (value after decrementing)

// Prefix Decrement: --x
var w = 5;
console.log(--w); // 4 (decrements first, then returns the value)


//Contionals in JavaScript:
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement
// 5. Nested if statement

// if statement is used to execute a block of code if a specified condition is true. For example:
var num = 10;
if (num > 5) {
    console.log("The number is greater than 5");
}

// if...else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false. For example:
var num = 3;
if (num > 5) {
    console.log("The number is greater than 5");
} else {
    console.log("The number is not greater than 5");
}

// if...else if...else statement is used to execute one block of code among multiple conditions. For example:
var num = 7;
if (num > 10) {
    console.log("The number is greater than 10");
} else if (num > 5) {
    console.log("The number is greater than 5 but less than or equal to 10");
} else {
    console.log("The number is less than or equal to 5");
}

// switch statement is used to perform different actions based on different conditions. For example:
var fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("This is a banana");
        break;
    case "apple":
        console.log("This is an apple");
        break;
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("Unknown fruit");
}

// Nested if statement is an if statement inside another if statement. For example:
var num = 15;
if (num > 10) {
    if (num < 20) {
        console.log("The number is between 10 and 20");
    }
}

let a = 5;
let b = 10;
console.log(a++ + ++b); // Output: 16

let x = 10;
console.log(x++ + x++ + ++x);  // Output: 34

console.log(true + false + true); // Output: 2

console.log(5 + "5" - 2 * 3); // Output: 49

console.log(10 > 5 && 20 > 30 || 5 == "5"); // Output: true

console.log(10 > 5 && 20 > 30 || 5 === "5"); // Output: false

console.log(!(10 > 5)); // Output: false

let a = 10;
console.log(a+= a*= 2); // Output: 30

console.log(2 ** 3 ** 2); // Output: 512

let a = 5;
console.log(a++ == ++a); // Output: false

console.log("" == false); // Output: true
console.log("" === false); // Output: false

let a = 2
console.log(a++ * ++a + a--); // Output: 12


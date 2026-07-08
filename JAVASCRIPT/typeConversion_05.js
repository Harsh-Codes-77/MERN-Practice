// Type Conversion(Explicit) and Type Coversion(Inplicit) in JavaScript:
// Type conversion is the process of converting a value from one data type to another. In JavaScript, there are two types of type conversion: implicit and explicit.

// Implicit Type Conversion (Type Coercion):
// JavaScript automatically converts values from one type to another when performing operations involving different data types. This is known as implicit type conversion or type coercion. For example:
let num = 5;
let str = "10";
let result = num + str; // The number 5 is implicitly converted to a string, resulting in "510"
console.log(result); // Output: "510"

// Explicit Type Conversion:
// Explicit type conversion is when you manually convert a value from one data type to another using built-in functions or methods. For example:
let strNum = "20";
let convertedNum = Number(strNum); // Converts the string "20" to the number 20
console.log(convertedNum); // Output: 20

// convert string to number
let str = "123";
let num = Number(str); // Converts the string "123" to the number 123
console.log(num); // Output: 123

// convert number to string
let num2 = 456;
let str2 = String(num2); // Converts the number 456 to the string "456"
console.log(str2); // Output: "456"

// convert boolean to string
let bool = true;
let str3 = String(bool); // Converts the boolean true to the string "true"
console.log(str3); // Output: "true"

// convert string to boolean
let str4 = "false";
let bool2 = Boolean(str4); // Converts the non-empty string "false" to the boolean true
console.log(bool2); // Output: true

// convert number to boolean
let num3 = 0;
let bool3 = Boolean(num3); // Converts the number 0 to the boolean false
console.log(bool3); // Output: false

// convert boolean to number
let bool4 = true;
let num4 = Number(bool4); // Converts the boolean true to the number 1
console.log(num4); // Output: 1

// ParseInt and ParseFloat
// parseInt() --> Converts a string to an integer. It parses the string until it encounters a character that is not a digit, and returns the integer value.
let str5 = "42";
let intNum = parseInt(str5); // Converts the string "42" to the integer 42
console.log(intNum); // Output: 42

// Difference between parseInt() and Number():
// 1. parseInt() parses a string and returns an integer, while Number() converts a value to a number (integer or float).
// 2. parseInt() ignores non-numeric characters after the first numeric character, while Number() returns NaN if the value cannot be converted to a number.
let str6 = "3.14";
let intNum2 = parseInt(str6); // Converts the string "3.14" to the integer 3
console.log(intNum2); // Output: 3

let num5 = Number(str6); // Converts the string "3.14" to the number 3.14
console.log(num5); // Output: 3.14

// parseInt() --> parses a string and returns an integer
// Number() --> converts a value to a number (integer or float)

Number(true); // Converts the boolean true to the number 1
Number(false); // Converts the boolean false to the number 0    
Number(undefined); // Converts undefined to NaN (Not a Number)
Number(null); // Converts null to the number 0
Number(" "); // Converts an empty string to the number 0

// Falsy values in JavaScript are values that are considered false when evaluated in a boolean context. The following values are considered falsy in JavaScript:
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not a Number)

// All other values are considered truthy, meaning they evaluate to true in a boolean context.

// Type Conversion and Implicit Type Coercion in JavaScript can sometimes lead to unexpected results, especially when dealing with different data types. It's important to be aware of how JavaScript handles type conversion to avoid potential bugs in your code.
// Example of type conversion and implicit type coercion:
let a = "5";
let b = 10;
let c = a + b; // The string "5" is implicitly converted to a number, resulting in the string "510"
console.log(c); // Output: "510"

let d = "5";
let e = 10;
let f = d * e; // The string "5" is implicitly converted to a number, resulting in the number 50
console.log(f); // Output: 50

let g = "5";
let h = "10";
let i = g * h;
console.log(i); // Output: 50 (both strings are implicitly converted to numbers)

console.log("5" >= 2); // Output: true (the string "5" is implicitly converted to the number 5)

console.log(undefined + 1); // Output: NaN (undefined is not a number, so the result is NaN)

console.log("AB" + 2 + 3); // Output: "AB23" (the number 2 is implicitly converted to a string, resulting in the string "AB23")
console.log(2 + 3 + "AB"); // Output: "5AB" (the numbers 2 and 3 are added first, resulting in the number 5, which is then implicitly converted to a string and concatenated with "AB"

// Types Of Conversion in JavaScript:
// 1. String
// 2. Number
// 3. Boolean

[] + []; // Output: "" (both arrays are implicitly converted to empty strings, resulting in an empty string)
[] + {}; // Output: "[object Object]" (the empty array is implicitly converted to an empty string, and the empty object is implicitly converted to the string "[object Object]")

{} + []; // Output: 0 (the empty object is implicitly converted to NaN, and the empty array is implicitly converted to 0, resulting in 0)

{} + {}; // Output: NaN (both empty objects are implicitly converted to NaN, resulting in NaN)

"" == false; // Output: true (the empty string is implicitly converted to false, resulting in true)
[] == false; // Output: true (the empty array is implicitly converted to false, resulting in true)

null == undefined; // Output: true (null and undefined are considered equal in JavaScript)

NaN == NaN; // Output: false (NaN is not equal to itself in JavaScript)

let num = 100
let num1 = new Number(100)
num1.toString(); // Converts the Number object to a string representation
let num2 = 1000000
num2.toLocaleString('en-IN'); // Converts the nnumber to a string representation with commas as thousands separators based on the specified locale (in this case, 'en-IN' for Indian English)
num2.toLocaleString('en-US'); // Converts the number to a string representation with commas as thousands separators based on the specified locale (in this case, 'en-US' for US English)

// Math methods:

Math.abs(-5); // Returns the absolute value of -5, which is 5
Math.round(4.5); // Rounds 4.7 to the nearest integer, which is 5
Math.round(4.4); // Rounds 4.4 to the nearest integer, which is 4
Math.floor(4.7); // Rounds 4.7 down to the nearest integer, which is 4
Math.ceil(4.2); // Rounds 4.2 up to the nearest integer, which is 5
Math.max(1, 2, 3, 4, 5); // Returns the maximum value among the given numbers, which is 5
Math.min(1, 2, 3, 4, 5); // Returns the minimum value among the given numbers, which is 1
Math.pow(2, 3); // Returns 2 raised to the power of 3, which is 8
Math.sqrt(16); // Returns the square root of 16, which is 4
Math.random(); // Returns a random number between 0 (inclusive) and 1 (exclusive)
Math.random() * 10; // Returns a random number between 0 (inclusive) and 10 (exclusive)
(Math.random() * 10) + 2; // Returns a random number between 2 (inclusive) and 12 (exclusive)
Math.floor(Math.random() * 10) + 1; // Returns a random integer between 1 (inclusive) and 10 (inclusive)
Math.ceil(Math.random() * 10) + 1; // Returns a random integer between 1 (inclusive) and 10 (inclusive)
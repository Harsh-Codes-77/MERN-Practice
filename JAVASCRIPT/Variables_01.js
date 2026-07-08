// JS —>
//     1. Functional
//     2. Interactive
//     3. HTML (Update/Create)
//     4. CSS

// **Brenden Eich** created JavaScript Under 10 days in **1995**
// Before we call JS as **MOCHA in 1995**
// After we call it **LiveScript**
// On that time it didn’t that famous then they named it as JavaScript
// EcmaScript(Community) makes it standardrized in 1997

// **Browser has v8 engine where we can use JS
// Then Node js was created for running JS on out local systems

// Chrome has v8
// Safari has webkit 
// Firefox has SpiderMonkey**

// Variables --> Place where you can store data values. Variables are containers for storing data values. In JavaScript, you can declare a variable using the var, let, or const keywords.

// Variables Decalaration
var a
// Variables Initialization
a = 10
// Printing the value of variable a
// console.log(a)

// Declaring and initializing a variable in a single line

var b = 20
var x = 20
x = 10
// console.log(x)

// We can redeclare a variable using var keyword but we cannot redeclare a variable using let and const keywords. We can reassign a variable using var and let keywords but we cannot reassign a variable using const keyword.

let insertCard = 123
insertCard = 456
// let insertCard = 789 // This will throw an error because we cannot redeclare a variable using let keyword
// console.log(insertCard)

// let PI = 3.14
// PI = 3.14159 // This will throw an error because we cannot reassign a variable using const keyword
// console.log(PI)


// Const is a block-scoped variable that cannot be reassigned or redeclared. It is used to declare variables that are meant to remain constant throughout the program. Once a value is assigned to a const variable, it cannot be changed.
// const PI = 3.14 
// console.log(PI)

// var Redeclaration and Reinitialization
// Let ReInitialization
// Const 

// Rules for naming variables in JavaScript:
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive.
// 4. Reserved words (like JavaScript keywords) cannot be used as variable names.

var _myVariable = 10
var $myVariable = 20
var myVariable1 = 30
var my_variable = 40
var myVariable$ = 50

// console.log(_myVariable)
// console.log($myVariable)
// console.log(myVariable1)
// console.log(my_variable)
// console.log(myVariable$)

// Scopes -> 1. Global Scope
//           2. Local Scope
//           3. Block Scope

// Global Scope -> Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

var globalVar = "I am a global variable";

function myFunction() {
    console.log(globalVar); // Accessible here
}

myFunction();
console.log(globalVar); // Accessible here too

// Local Scope -> Variables declared within a function have local scope. They can only be accessed within that function.

function myLocalFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}

myLocalFunction();
// console.log(localVar); // This will throw an error because localVar is not accessible outside the function

// Block Scope -> Variables declared with let or const inside a block (e.g., inside an if statement or loop) have block scope. They can only be accessed within that block.

if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}

// console.log(blockVar); // This will throw an error because blockVar is not accessible outside the block  

// Advantages of using let and const over var:
// 1. Block Scope: let and const have block scope, which helps prevent accidental variable overwrites and makes the code more predictable.
// 2. No Hoisting Issues: Variables declared with let and const are not hoisted to the top of their block, reducing confusion about variable availability.
// 3. Readability: Using const for variables that should not change makes the code easier to understand and maintain.


// Datatypes in JavaScript:
// 1. Primitive Datatypes: String, Number, Boolean, Null, Undefined, Symbol (ES6), BigInt (ES2020)
// 2. Non-Primitive Datatypes: Object, Array, Function


// Primitives are immutable, meaning their values cannot be changed once they are created. Non-primitives are mutable, meaning their values can be changed after they are created.

// Type checking in JavaScript can be done using the typeof operator. For example:
var myString = "Hello, World!";
var myNumber = 42;
var myBoolean = true;
var myNull = null;
var myUndefined;
var mySymbol = Symbol("mySymbol");
var myBigInt = 9007199254740991n;

console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof myBoolean); // "boolean"
console.log(typeof myNull); // "object" (this is a known quirk in JavaScript)
console.log(typeof myUndefined); // "undefined"
console.log(typeof mySymbol); // "symbol"
console.log(typeof myBigInt); // "bigint"

//  if we put 0, false, null, undefined, NaN, empty string in if condition then it will return false otherwise it will return true
if (0) {
    console.log("This will not be printed");
} else {
    console.log("0 is falsy"); // This will be printed
}

if (false) {
    console.log("This will not be printed");
} else {
    console.log("false is falsy"); // This will be printed
}

if (null) {
    console.log("This will not be printed");
} else {
    console.log("null is falsy"); // This will be printed
}

if (undefined) {
    console.log("This will not be printed");
} else {
    console.log("undefined is falsy"); // This will be printed
}

if (NaN) {
    console.log("This will not be printed");
} else {
    console.log("NaN is falsy"); // This will be printed
}

if ("") {
    console.log("This will not be printed");
} else {
    console.log("Empty string is falsy"); // This will be printed
}


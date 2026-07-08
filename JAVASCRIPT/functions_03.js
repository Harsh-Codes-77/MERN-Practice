// ===============================
// FUNCTIONS IN JAVASCRIPT (HINGLISH)
// ===============================

// Function --> Function code ka ek block hota hai jo kisi specific kaam ko perform karta hai.
// Ek baar function bana lo, phir jitni baar chaho use kar sakte ho.


// ===============================
// PARAMETERS vs ARGUMENTS
// ===============================

// Parameters --> Function define karte time jo variables likhte hain unhe parameters kehte hain.
// Arguments --> Function call karte time jo actual values pass karte hain unhe arguments kehte hain.

function sum(a, b) { // a aur b parameters hain
    return a + b;
}

const result = sum(5, 10); // 5 aur 10 arguments hain
console.log("Sum =", result); // Output: 15


// ===============================
// FUNCTION DECLARATION (NAMED FUNCTION)
// ===============================

// Sabse common tareeka function banane ka.
// Ye hoist hota hai, matlab function ko define karne se pehle bhi call kar sakte ho.

sayHello();

function sayHello() {
    console.log("Hello Harsh");
}


// ===============================
// FUNCTION EXPRESSION
// ===============================

// Function ko kisi variable me store karna Function Expression kehlata hai.
// Ye hoist nahi hota.

const multiply = function(x, y) {
    return x * y;
};

console.log("Multiplication =", multiply(4, 5));


// ===============================
// ANONYMOUS FUNCTION
// ===============================

// Anonymous Function = Function jiska koi naam nahi hota.
// Mostly callback ke roop me use hota hai.

setTimeout(function() {
    console.log("2 second baad ye print hoga");
}, 2000);


// ===============================
// ARROW FUNCTION
// ===============================

// Arrow Function ES6 me introduce hua.
// Chhota aur clean syntax provide karta hai.

const add = (a, b) => {
    return a + b;
};

console.log("Addition =", add(10, 20));


// Ek line ho to return likhne ki bhi zarurat nahi.

const square = num => num * num;

console.log("Square =", square(5));


// ===============================
// CALLBACK FUNCTION
// ===============================

// Callback Function wo function hota hai jo kisi dusre function ko argument ke roop me pass kiya jata hai.

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Good Bye");
}

greet("Harsh", bye);


// ===============================
// IIFE (Immediately Invoked Function Expression)
// ===============================

// Function banate hi turant execute karna ho to IIFE use karte hain.

(function() {
    console.log("Main IIFE hu aur turant run ho gaya");
})();


// ===============================
// HIGHER ORDER FUNCTION
// ===============================

// Jo function kisi function ko argument me leta hai
// ya function return karta hai use Higher Order Function kehte hain.

function operation(a, b, task) {
    return task(a, b);
}

function subtract(x, y) {
    return x - y;
}

console.log(operation(20, 5, subtract));


// ===============================
// RETURNING FUNCTION
// ===============================

// Function ke andar se function return kar sakte hain.

function outer() {
    return function inner() {
        console.log("Inner Function");
    };
}

const myFunc = outer();
myFunc();


// ===============================
// RECURSIVE FUNCTION
// ===============================

// Jab function khud ko hi call karta hai use Recursive Function kehte hain.

function countdown(n) {
    if (n === 0) {
        console.log("Done");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);


// ===============================
// DEFAULT PARAMETER FUNCTION
// ===============================

// Agar argument pass na kare to default value use hogi.

function greetUser(name = "Guest") {
    console.log("Welcome " + name);
}

greetUser();
greetUser("Harsh");


// ===============================
// REST PARAMETER FUNCTION
// ===============================

// Multiple arguments ko ek array me receive karne ke liye rest parameter use hota hai.

function total(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(total(10, 20, 30, 40));


// ===============================
// GENERATOR FUNCTION
// ===============================

// Generator Function execution ko pause aur resume kar sakta hai.
// Isme yield keyword use hota hai.

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateNumbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// ===============================
// ASYNC FUNCTION
// ===============================

// Async Function asynchronous operations handle karne ke liye use hota hai.

async function fetchData() {
    return "Data mil gaya";
}

fetchData().then(data => console.log(data));


// ===============================
// SETTIMEOUT FUNCTION
// ===============================

// setTimeout kisi code ko specified delay ke baad execute karta hai.

setTimeout(() => {
    console.log("3 second baad print hua");
}, 3000);


// ===============================
// MAP KE SAATH ANONYMOUS FUNCTION
// ===============================

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(num) {
    return num * num;
});

console.log("Squares =", squares);


// ===============================
// MAP KE SAATH ARROW FUNCTION
// ===============================

const doubles = numbers.map(num => num * 2);

console.log("Doubles =", doubles);


// ===============================
// HOISTING
// ===============================

// Function Declaration hoist hoti hai

test();

function test() {
    console.log("Function Hoisting");
}


// Function Expression hoist nahi hoti

// demo(); // Error

const demo = function() {
    console.log("Function Expression");
};


// ===============================
// TYPES OF FUNCTIONS IN JS
// ===============================

// 1. Function Declaration
// 2. Function Expression
// 3. Anonymous Function
// 4. Arrow Function
// 5. Callback Function
// 6. IIFE Function
// 7. Higher Order Function
// 8. Returning Function
// 9. Recursive Function
// 10. Default Parameter Function
// 11. Rest Parameter Function
// 12. Generator Function
// 13. Async Function

// Ye sab JavaScript me sabse important function types hain.

// Higher Order Functions (HOF) --> map(), filter(), find() ye teen methods HOF hain.
// HOF are those functions that takes another function as an argument or returns a function as a result.

// 1. Function argument
// 2. Function argument

// Example callBack function and HOF Functions

// function greet(){
//     console.log("Good Morning")

// }
// function sayBye(){
//     console.log("Good Bye ||")
// }

function sayBye(){
    console.log("Good Bye ||");
}

function sayThanks(){
    console.log("Good Thanks ||");
}

function sayWelcome(){
    console.log("Good Welcome ||");
}

// function greetWithBye(){
//     console.log("Good Morning");
//     sayBye();
// }
// function greetWithThanks(){
//     console.log("Good Morning");
//     sayThanks();
// }
// function greatWithWelcome(){
//     console.log("Good Morning");
//     sayWelcome();
// }

// function greet(callback){
//     console.log("Good Morning");
//     callback();
// }

// function greet(){
//     console.log("Good Morning");
// }

// greet(console.log(sayBye()));

function greet(cb){
    console.log("Good Morning");
    cb();
}

greet(sayBye);

// greetWithBye(sayBye);
// greetWithThanks(sayThanks);
// greetWithWelcome();



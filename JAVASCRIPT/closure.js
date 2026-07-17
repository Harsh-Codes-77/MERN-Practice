// Closure ---> Closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//              It allows a function to remember and access variables from its outer scope even after the outer function has finished executing.
// agar ek function ke andar doosra function bana ho, aur inner function outer function ke variables ko access kar sake, even jab outer function execute ho chuka ho, to usse closure kehte hain.

function outer() {
    let name = "Harsh";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunc = outer();

myFunc();

// Counter function using closure:

function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const myCounter = counter();

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3
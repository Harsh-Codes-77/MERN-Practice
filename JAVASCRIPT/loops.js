// For loops, we can use the `for` loop, `while` loop, and `do...while` loop. Here's an example of each:

// 1. For loop -> iterates a block of code a specific number of times, it has three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// 2. While loop -> continues to execute a block of code as long as the specified condition is true. Number of iterations is not predetermined.
// Real-world example: A while loop can be used to read data from a file until the end of the file is reached.
let j = 0;
while (j < 5) {
    console.log(`While loop iteration: ${j}`);
    j++;
}

// 3. Do...while loop -> similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.
let k = 0;
do {
    console.log(`Do...while loop iteration: ${k}`);
    k++;
} while (k < 5);

// ForEach loop -> used to iterate over elements of an array or collection. It executes a provided function once for each array element.
const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
    console.log(`ForEach loop element: ${element}`);
});

// For...in loop -> used to iterate over the properties of an object. It executes a block of code for each property in the object.
// for of loop -> used to iterate over the values of an iterable object (like an array, string, or map). It executes a block of code for each value in the iterable object.
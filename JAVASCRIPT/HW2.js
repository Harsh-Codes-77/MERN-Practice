// Q1. Create a Student Object
// ---------------------------
// Create a student object with:
// - name
// - age
// - course

let student = {
    name: "John",
    age: 20,
    course: "Computer Science"
};

// Convert the object into a JSON string using JSON.stringify().

// Print:
// 1. Original Object
// 2. JSON String
// 3. Type of both

let jsonString = JSON.stringify(student);

console.log("Original Object:", student);
console.log("JSON String:", jsonString);
console.log("Type of Original Object:", typeof student);
console.log("Type of JSON String:", typeof jsonString);


// Q2. JSON to Object
// ------------------
// Create the following JSON string:

// '{"name":"Rahul","age":21,"city":"Indore"}'

// Convert it into a JavaScript object using JSON.parse().

// Print:
// 1. Complete Object
// 2. Name
// 3. City

let jsonStr = '{"name":"Rahul","age":21,"city":"Indore"}';

let jsObject = JSON.parse(jsonStr);

console.log("Complete Object:", jsObject);
console.log("Name:", jsObject.name);
console.log("City:", jsObject.city);


// Q3. Predict the Output
// ----------------------
// Without running the code, predict the output.

// let user = {
//     name: "Amit",
//     age: 20
// };

// let data = JSON.stringify(user);

// console.log(typeof data);

// Output ---> string beacuse JSON.stringify() converts a JavaScript object into a JSON string.


// Q4. Functions in JSON
// ---------------------
// Create an object containing:
// - name
// - age
// - greet() function

// Convert it into JSON.

// Questions:
// 1. Is the function present in the JSON?
// 2. Explain why.

let userWithFunction = {
    name: "Amit",
    age: 20,
    greet: function() {
        console.log("Hello!");
    }
};

let jsonWithFunction = JSON.stringify(userWithFunction);

console.log("JSON with Function:", jsonWithFunction);

// Output: {"name":"Amit","age":20}
// The function is not present in the JSON because JSON.stringify() does not serialize functions. Functions are not valid JSON data types, so they are omitted during the conversion process.


// Q5. Undefined in JSON
// ---------------------
// Create an object containing:
// - name
// - age
// - city: undefined

// Convert it into JSON.

// Questions:
// 1. What is the output?
// 2. Why is city missing?

let userWithUndefined = {
    name: "Amit",
    age: 20,
    city: undefined
};

let jsonWithUndefined = JSON.stringify(userWithUndefined);

console.log("JSON with Undefined:", jsonWithUndefined);

// Output: {"name":"Amit","age":20}
// The city property is missing in the JSON output because JSON.stringify() ignores properties with undefined values. Undefined is not a valid JSON data type, so it is omitted during the conversion process.


// Function Borrowing

// Q6. Borrow a Function using call()
// ----------------------------------
// Create two objects:

// user1
// - name
// - city

// user2
// - name
// - city

// Create one function:

// introduce(country)

// Use call() to borrow the function for user2.

let user1 = {
    name: "Rahul",
    city: "Indore"
};

let user2 = {
    name: "Amit",
    city: "Delhi"
};

function introduce(country) {
    console.log(`Hello, my name is ${this.name} from ${this.city}, ${country}.`);
}

introduce.call(user2, "India");


// Q7. Borrow a Function using apply()
// -----------------------------------
// Using the same objects,

// Call introduce() using apply().

// Pass arguments as an array.

function introduce(country) {
    console.log(`Hello, my name is ${this.name} from ${this.city}, ${country}.`);
}

introduce.apply(user2, ["India"]);


// Q8. Borrow a Function using bind()
// ----------------------------------
// Using the same function,

// Create a new function using bind().

// Call the new function later with different arguments.

function introduce(country) {
    console.log(`Hello, my name is ${this.name} from ${this.city}, ${country}.`);
}

let boundIntroduce = introduce.bind(user1);

boundIntroduce("India");


// Q9. Predict the Output
// ----------------------

// const person1 = {
//     name: "Rahul"
// };

// const person2 = {
//     name: "Amit"
// };

// function greet(city) {
//     console.log(this.name, city);
// }

// greet.call(person2, "Delhi");

// Predict the output and explain why.

// Output: "Amit Delhi"
// Explanation: The call() method is used to invoke the greet function with person2 as the context (this). Therefore, this.name refers to person2's name, which is "Amit". The second argument "Delhi" is passed as the city parameter, resulting in the output "Amit Delhi".

// Que : Create three objects:
// - student1
// - student2
// - student3

// Each object should only have:
// - name

// Create one common function:

// welcome(city, age)

// Without copying the function into every object:

// 1. Use call() for student2.
// 2. Use apply() for student3.
// 3. Use bind() to create a new function for student1 and call it later.

let student1 = {
    name: "John"
};

let student2 = {
    name: "Alice"
};

let student3 = {
    name: "Bob"
};

function welcome(city, age) {
    console.log(`Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`);
}

// Using call() for student2
welcome.call(student2, "New York", 22);

// Using apply() for student3
welcome.apply(student3, ["Los Angeles", 25]);

// Using bind() for student1
let boundWelcome = welcome.bind(student1);
boundWelcome("Chicago", 20);
// JSON stands for Javascript Object Notation.
// JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. 
// It is often used to transmit data between a server and a web application as text.
// Why we use JSON:

// 1. JSON is easy to read and write for humans.
// 2. JSON is easy to parse and generate for machines.
// 3. JSON is language-independent, meaning it can be used with any programming language that supports text-based data formats.
// 4. JSON is widely used in web development for data exchange between client and server.

// json.parse() is a method in JavaScript that is used to parse a JSON string and convert it into a JavaScript object.
// json.stringify() is a method in JavaScript that is used to convert a JavaScript object into a JSON string.

// example of json.parse() and json.stringify():

let jsonString = '{"name": "Harsh", "age": 20}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'Harsh', age: 20 }

let newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"Harsh","age":20}



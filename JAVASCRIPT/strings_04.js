// String --> String is a sequence of characters used to represent text. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals. Strings can be manipulated using various methods and properties.

// Example of a string
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// String concatenation --> String concatenation is the process of combining two or more strings into a single string. In JavaScript, you can concatenate strings using the + operator or the concat() method.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName; // Using + operator
console.log(fullName); // Output: John Doe

var fullName2 = firstName.concat(" ", lastName); // Using concat() method
console.log(fullName2); // Output: John Doe

// String length --> The length property of a string returns the number of characters in the string, including spaces and special characters.
var str = "Hello, World!";
console.log(str.length); // Output: 13

// String methods --> JavaScript provides various built-in methods to manipulate strings.
// 1. toUpperCase() --> Converts the string to uppercase letters.
var lowerCaseStr = "hello";
console.log(lowerCaseStr.toUpperCase()); // Output: HELLO

// 2. toLowerCase() --> Converts the string to lowercase letters.
var upperCaseStr = "HELLO";
console.log(upperCaseStr.toLowerCase()); // Output: hello

// 3. indexOf() --> Returns the index of the first occurrence of a specified value in a string. Returns -1 if the value is not found.
var str2 = "Hello, World!";
console.log(str2.indexOf("World")); // Output: 7
console.log(str2.indexOf("JavaScript")); // Output: -1

// 4. slice() --> Extracts a section of a string and returns it as a new string, without modifying the original string.
var str3 = "Hello, World!";
console.log(str3.slice(0, 5)); // Output: Hello
console.log(str3.slice(7)); // Output: World!

// 5. replace() --> Replaces a specified value with another value in a string.
var str4 = "Hello, World!";
var newStr = str4.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

// 6. split() --> Splits a string into an array of substrings based on a specified separator.
var str5 = "apple,banana,cherry";
var fruits = str5.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// 7. trim() --> Removes whitespace from both ends of a string.
var str6 = "   Hello, World!   ";
console.log(str6.trim()); // Output: Hello, World!

// 8. charAt() --> Returns the character at a specified index in a string.
var str7 = "Hello, World!";
console.log(str7.charAt(0)); // Output: H
console.log(str7.charAt(7)); // Output: W

// 9. includes() --> Determines whether a string contains a specified value, returning true or false.
var str8 = "Hello, World!";
console.log(str8.includes("World")); // Output: true
console.log(str8.includes("JavaScript")); // Output: false

// 10. startsWith() --> Determines whether a string starts with a specified value, returning true or false.
var str9 = "Hello, World!";
console.log(str9.startsWith("Hello")); // Output: true
console.log(str9.startsWith("World")); // Output: false

// 11. endsWith() --> Determines whether a string ends with a specified value, returning true or false.
var str10 = "Hello, World!";
console.log(str10.endsWith("World!")); // Output: true
console.log(str10.endsWith("Hello")); // Output: false

// 12. repeat() --> Returns a new string that contains the specified number of copies of the original string.
var str11 = "Hello! ";
console.log(str11.repeat(3)); // Output: Hello! Hello! Hello!
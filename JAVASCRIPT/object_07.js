// // Objects ---> Objects ek data structure hai jo key-value pairs ko store karta hai.

// let student = {
//     id: 101,
//     name: "Harsh Pathak",
//     age: 20,
//     batch: "B.Tech",
//     cgpa: 8.00,
// }

// console.log(student.name); // Harsh Pathak
// console.log(student.age); // 20
// console.log(student.batch); // B.Tech
// console.log(student.cgpa); // 8.00

// // Use dynamic key to access the value of an object

// let key = "name";
// console.log(student[key]); // Harsh Pathak

// key = "age";
// console.log(student[key]); // 20

// // What if key has space in it?
// // for spaces ot underscore in key we use "" and put key inside it and then use [] to access the value of that key.

// let student2 = {
//     "first name": "Harsh",
//     "last name": "Pathak",
//     age: 20,
// }

// console.log(student2["first name"]); // Harsh
// console.log(student2["last name"]); // Pathak

// // More about objects theory

// // objects are mutable, which means we can change the values of the properties of an object after it has been created.

// student.age = 21;
// console.log(student.age); // 21

// // We can also add new properties to an object after it has been created.

// student.gender = "Male";
// console.log(student.gender); // Male

// // Object is a collection if related data and stoed in key-value pairs. And this is non primitve data type. And it is mutable. And it is a reference type. And it is unordered. And it is a complex data type

// let laptop = {
//     brand : "Samsung",
//     price : 50000
// }

// laptop.color = "Black";
// laptop["Processor"] = "Intel i7";
// console.log(laptop.color); // Black
// // Object.freeze(laptop); // Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the same object that was passed in.
// // laptop.model = "Samsung Galaxy Book"; // This will not work because the object is frozen.
// delete laptop.price; // this will delete the price property from the laptop object.
// delete laptop["color"]; // this will delete the color property from the laptop object.
// console.log(laptop); // Object { brand: "Samsung", price: 50000, color: "Black", Processor: "Intel i7" }


// let employee = {
//     id: 101,
//     name: "Harsh Pathak",
// }

// employee.salary = 90000;
// employee.department = "IT";

// employee["designation"] = "Software Engineer";
// employee["experience"] = 2;

// Object.freeze(employee);
// employee.shift = "Morning";
// console.log(employee);

// delete employee.department;
// delete employee.shift;

// console.log(employee);


// Optional Chaining (?.) is used to safely access properties or methods of an object.
// It prevents your program from crashing when property does not exist.

const user = {
    name: "Harsh Pathak",
    // address: {
    //     city: "Jaunpur",
    //     state: "Uttar Pradesh"
    // },
}
console.log(user.address?.city)
console.log("Hey")

// Creating object using function

function printBag(name, capacity, color, price) {
    return {
        name,
        capacity,
        color,
        price,
    }
}

let bag = printBag("Adidas", "30L", "Black", 2000);
console.log(bag);

// symbol is a primitive data type that is used to create unique identifiers for objects. It is not a constructor function and cannot be called with the new keyword. Each time you call Symbol(), it returns a new unique symbol.
// It is commonly used as a unique key.

let id = Symbol("id");
let name = Symbol("name");

let student3 = {
    [id]: 101,
    [name]: "Harsh Pathak",
}

console.log(student3[id]); // 101
console.log(student3[name]); // Harsh Pathak

console.log(typeof id); // symbol

// let token = Symbol("token");

// const bankAccount = {
//     name : "HDFC",
//     [token] : "HDFCX123",
//     token : "HDFCX123"
// }

// console.log(bankAccount)


// Nullish Coalescing Operator (??) is used to provide a default value when the left-hand side expression evaluates to null or undefined. It is similar to the logical OR operator (||), but it only considers null and undefined as falsy values, while || considers all falsy values (like 0, "", false, etc.).
// It returns right hand side value when left hand side value is null or undefined.
// if my value is null or undefined then we will return default value

let city = "Jaunpur";
console.log(city ?? "Not available"); // Jaunpur

let token = Symbol("token");
let IFCSC = Symbol("IFCSC");

const bankAccount = {
    name : "HDFC",
    [token] : "HDFCX123",
    [IFCSC] : "HDFC000123",
    token : "ABC1234"
}

console.log(Object.keys(bankAccount)); // ["name", "token"]
console.log(Object.getOwnPropertySymbols(bankAccount)); // [Symbol(token), Symbol(IFCSC)]
console.log(Object.values(bankAccount)); // ["HDFC", "HDFCX123"]
console.log(Object.entries(bankAccount)); // [["name", "HDFC"], ["token", "ABC1234"]]
console.log(Object.freeze(bankAccount)); // Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the same object that was passed in.


console.log(bankAccount)

// Create a object and print their values using for in loop with ":" this seprator ---->

let student4 = {
    id: 101,
    name: "Harsh Pathak",
    age: 20,
    batch: "B.Tech",
    cgpa: 8.00,
}

for (let key in student4) {
    console.log(key + ": " + student4[key]);
}

// Spread Operator ---> 
// The Spread Operator (...) copies all enumerable properties from one object into another object.
// 1. Expands (one to many)
// 2. Used in array, objects and function calling

// Rest Operator --->
// The Rest Operator (...) collects all remaining properties into a new object. It is used in function parameters to gather all remaining arguments into an array or object.
// 1. many to one
// 2. Functional Parameters and destructuring

arr1 = [1, 2]
arr2 = [3, 4]
arr3 = [5, 6]
let newArr = arr1.concat(arr2, arr3)
console.log(newArr) // [1, 2, 3, 4, 5, 6]
merge = [...arr1, ...arr2, ...arr3]
console.log(merge) // [1, 2, 3, 4, 5, 6]

let obj1 = {
    name: "Harsh",
    age: 20,
}

let obj2 = {
    batch: "B.Tech",
    cgpa: 8.00,
}

let newObj = Object.assign({}, obj1, obj2)
console.log(newObj) // {name: "Harsh", age: 20, batch: "B.Tech", cgpa: 8.00}

let newObj2 = {...obj1, ...obj2}
console.log(newObj2) // {name: "Harsh", age: 20, batch: "B.Tech", cgpa: 8.00}

// Uses of Spread Operator

// 1. Copying an object
// 2. Merging two objects
// 3. Adding new properties to an object
// 4. Converting a string into an array of characters
// 5. Converting a NodeList into an array

// Uses of Rest Operator

// 1. Collecting all remaining properties into a new object
// 2. Gathering all remaining arguments into an array
// 3. Destructuring an object and collecting the remaining properties into a new object
// 4. Destructuring an array and collecting the remaining elements into a new array

// Hoisting ---> Hoisting ka matlab hai ki JavaScript me variable aur function declarations ko unke scope ke top par le jaya jata hai. Iska matlab hai ki aap variable ya function ko declare karne se pehle use kar sakte hain. Lekin, ye sirf declarations ke liye hota hai, initializations ke liye nahi.
// Hoinsting means js moves declaration to the top before code execution.

// In let and const we get TDZ(Tempral Dead Zone)
// In var we get undefined

// This keyword --->
// The this keyword refers to the object it belongs to. It has different values depending on where it is used:
// 1. In a method, this refers to the owner object.
// 2. Alone, this refers to the global object.
// 3. In a function, this refers to the global object.
// 4. In a function, in strict mode, this is undefined.
// 5. In an event, this refers to the element that received the event.
// 6. Methods like call(), apply(), and bind() can refer this to any object.


let user1 = {
    name: "Harsh",
    greet : function() {
        console.log("Hello " + this.name);
    }
}

let user2 = {
    name: "John",
    greet : function() {
        console.log("Hello " + this.name);
    }
}

user1.greet() // Hello Harsh
user2.greet() // Hello John


// Object Destructuring ---> Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way. It uses a syntax that resembles the structure of the object being destructured.

// let [] = arrayname

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
};

let {title, author} = book;
console.log(title); // The Great Gatsby
console.log(author); // F. Scott Fitzgerald

let {title: bookTitle, author: bookAuthor} = book;
console.log(bookTitle); // The Great Gatsby
console.log(bookAuthor); // F. Scott Fitzgerald


let Bag = {
    brand: "Adidas",
    item1: "book",
    item2: "charger",
    item3: "laptop",
    item4: "pen",
    item5: "water bottle",
}

let {brand, item1, item2, item3, item4, item5} = Bag;
console.log(brand); // Adidas
console.log(item1); // book
console.log(item2); // charger
console.log(item3); // laptop
console.log(item4); // pen
console.log(item5); // water bottle


let {brand: bagBrand, item1: bagItem1, item2: bagItem2, item3: bagItem3, item4: bagItem4, item5: bagItem5} = Bag;
console.log(bagBrand); // Adidas
console.log(bagItem1); // book
console.log(bagItem2); // charger
console.log(bagItem3); // laptop
console.log(bagItem4); // pen
console.log(bagItem5); // water bottle
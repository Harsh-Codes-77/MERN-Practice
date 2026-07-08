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

let token = Symbol("token");

const bankAccount = {
    name : "HDFC",
    [token] : "HDFCX123",
    token : "HDFCX123"
}

console.log(bankAccount)
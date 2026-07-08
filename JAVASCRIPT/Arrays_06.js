// // ===============================
// // ARRAYS IN JAVASCRIPT (HINGLISH)
// // ===============================

// // Array --> Multiple values ko ek hi variable me store karne ka tareeka.

// // Example:
// let fruits = ["Apple", "Banana", "Mango"];


// // ===============================
// // ARRAY KI ZAROORAT KYU HAI?
// // ===============================

// // 1. Multiple values ko ek variable me store karne ke liye.
// // 2. Data ko easily manage karne ke liye.
// // 3. Lists aur collections ko represent karne ke liye.
// // 4. Data processing aur manipulation ko easy banane ke liye.


// // ===============================
// // ARRAY KYA HOTA HAI?
// // ===============================

// // Array JavaScript ka ek special object hai jo multiple values store karta hai.

// // Important:
// // - Indexing 0 se start hoti hai.
// // - Different data types store kar sakta hai.

// let details = [
//     "Harsh",          // String
//     25,               // Number
//     true,             // Boolean
//     { city: "Jaunpur" }, // Object
//     [1, 2, 3]         // Array
// ];


// // ===============================
// // ARRAY BANANE KE TAREEKE
// // ===============================

// // Method 1: Array Literal

// let arr1 = [10, 20, 30, 40];

// // Method 2: Array Constructor

// let arr2 = new Array(10, 20, 30, 40);


// // ===============================
// // ARRAY ACCESS & UPDATE
// // ===============================

// let fruits1 = ["Apple", "Banana", "Mango"];

// console.log(fruits1[0]); // Apple

// fruits1[1] = "Pineapple"; // Value update

// console.log(fruits1);


// // ===============================
// // LENGTH PROPERTY
// // ===============================

// // Array me total kitne elements hain batata hai.

// console.log(fruits1.length);


// // ===============================
// // FOR LOOP
// // ===============================

// // Jab index ki zarurat ho tab use karte hain.

// let bikes = ["BMW", "GT650", "Classic350"];

// for(let i = 0; i < bikes.length; i++) {
//     console.log(bikes[i]);
// }


// // ===============================
// // FOR OF LOOP
// // ===============================

// // Direct values deta hai.

// for(let bike of bikes) {
//     console.log(bike);
// }


// // ===============================
// // FOR IN LOOP
// // ===============================

// // Index provide karta hai.

// for(let index in bikes) {
//     console.log(index);
// }


// // ===============================
// // FOR OF WITH STRING
// // ===============================

// let name = "Harsh";

// for(let ch of name) {
//     console.log(ch);
// }


// // ===============================
// // FOR IN WITH OBJECT
// // ===============================

// const student = {
//     id: 101,
//     name: "Harsh",
//     city: "Jaunpur"
// };

// for(let key in student) {
//     console.log(key, student[key]);
// }


// // ===============================
// // FOR OF vs FOR IN
// // ===============================

// // for...of --> Values deta hai
// // for...in --> Keys ya indexes deta hai

// let nums = [10, 20, 30];

// for(let value of nums){
//     console.log(value);
// }
// // 10 20 30

// for(let index in nums){
//     console.log(index);
// }
// // 0 1 2


// // ===============================
// // ARRAY METHODS
// // ===============================


// // =====================================
// // 1. PUSH()
// // =====================================

// // End me element add karta hai.

// let arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);
// // [1,2,3,4]


// // =====================================
// // 2. POP()
// // =====================================

// // Last element remove karta hai.

// let arr2a = [1,2,3,4];

// let removed = arr2a.pop();

// console.log(arr2a);
// // [1,2,3]

// console.log(removed);
// // 4


// // =====================================
// // 3. SHIFT()
// // =====================================

// // First element remove karta hai.

// let arr3 = [1,2,3,4];

// arr3.shift();

// console.log(arr3);
// // [2,3,4]

// // Time Complexity = O(n)


// // =====================================
// // 4. UNSHIFT()
// // =====================================

// // Beginning me element add karta hai.

// let arr4 = [2,3,4];

// arr4.unshift(1);

// console.log(arr4);
// // [1,2,3,4]

// // Time Complexity = O(n)


// // =====================================
// // 5. SLICE()
// // =====================================

// // Original array change nahi karta.
// // New array return karta hai.

// let arr5 = [1,2,3,4,5];

// let newArr = arr5.slice(1,4);

// console.log(newArr);
// // [2,3,4]

// console.log(arr5);
// // [1,2,3,4,5]


// // =====================================
// // 6. SPLICE()
// // =====================================

// // Original array modify karta hai.

// let arr6 = [1,2,3,4,5];

// arr6.splice(2,1,100);

// console.log(arr6);
// // [1,2,100,4,5]


// // =====================================
// // 7. REVERSE()
// // =====================================

// // Array ko ulta kar deta hai.

// let arr7 = [1,2,3,4,5];

// arr7.reverse();

// console.log(arr7);
// // [5,4,3,2,1]


// // =====================================
// // 8. SORT()
// // =====================================

// // Ascending order me sort karta hai.

// let arr8 = [3,1,5,2,4];

// arr8.sort();

// console.log(arr8);

// // Descending order

// arr8.sort((a,b) => b-a);

// console.log(arr8);


// // =====================================
// // 9. CONCAT()
// // =====================================

// // Arrays ko merge karta hai.

// let a = [1,2,3];
// let b = [4,5,6];

// let merged = a.concat(b);

// console.log(merged);


// // =====================================
// // 10. MAP()
// // =====================================

// // Har element par operation lagata hai.
// // New array return karta hai.

// let marks = [10,20,30];

// let doubled = marks.map((m) => m * 2);

// console.log(doubled);
// // [20,40,60]


// // Real Example

// let users = [
//     {id:1, name:"Harsh"},
//     {id:2, name:"Rahul"},
//     {id:3, name:"Rohit"}
// ];

// let names = users.map((u) => u.name);

// console.log(names);
// // ["Harsh","Rahul","Rohit"]


// // =====================================
// // 11. FILTER()
// // =====================================

// // Condition true hone wale elements return karta hai.

// let nums1 = [10,20,30,40,50];

// let result = nums1.filter((num) => num > 30);

// console.log(result);
// // [40,50]


// // Even Numbers

// let numbers = [1,2,3,4,5,6,7,8];

// let even = numbers.filter((num) => num % 2 === 0);

// console.log(even);
// // [2,4,6,8]


// // =====================================
// // 12. FIND()
// // =====================================

// // Pehla matching element return karta hai.

// let nums2 = [10,20,30,40,50];

// let found = nums2.find((num) => num > 30);

// console.log(found);
// // 40


// // =====================================
// // SHALLOW COPY
// // =====================================

// // Primitive values copy ho jati hain.
// // Objects reference share karte hain.

// let original = [{name:"Harsh"}];

// let copy = original.slice();

// copy[0].name = "Rahul";

// console.log(original);
// // [{name:"Rahul"}]

// // Dono same object reference use kar rahe hain.


// // ===============================
// // MOST IMPORTANT ARRAY METHODS
// // ===============================

// // push()
// // pop()
// // shift()
// // unshift()
// // slice()
// // splice()
// // reverse()
// // sort()
// // concat()
// // map()
// // filter()
// // find()

// // In methods ko ache se samajh lo.
// // Ye interviews, React aur JavaScript development me bahut use hote hain.

// // Difference between HOF and Callback Function

// // HOF --> Function jo dusre function ko argument me accept karta hai ya return karta hai.
// // Callback Function --> Function jo dusre function ke argument me pass hota hai.

// // Map Function Example

// let nums = [1, 2, 3, 4, 5];
// let res = nums.map((num) => num * 2);
// console.log(res);
// // [2, 4, 6, 8, 10]

// // Working of Map Function----->

// let nums = [1, 2, 3, 4, 5];

// function muMap(arr, callback) {
//     let newArray = []
//     for(let i = 0; i < arr.length; i++){
//         let r = callback(arr[i])
//         newArray.push(r)
//     }
//     return newArray
// }

// let ans = myMap(nums, function(num){
//     return num * 2
// })

// console.log(ans)
// // [2, 4, 6, 8, 10]


// // reduce() method --> reduce method execute a callback function on each element of the array and returns a single value.
// // where we use this method? --> we use this method when we want to reduce the array into a single value.

// let nums = [1, 2, 3, 4, 5];

// let sum = nums.reduce((a, b) => a + b, 0);
// // what is nums.reduce(a+b, 0) what is 0 here? --> 0 is the initial value of the accumulator.
// console.log(sum);
// // 15)


const orders = [
  {
    id: 1,
    customer: "Rahul",
    food: "Pizza",
    price: 500,
    delivered: true
  },
  {
    id: 2,
    customer: "Aman",
    food: "Burger",
    price: 250,
    delivered: false
  },
  {
    id: 3,
    customer: "Priya",
    food: "Pasta",
    price: 400,
    delivered: true
  },
  {
    id: 4,
    customer: "Riya",
    food: "Momos",
    price: 150,
    delivered: false
  }
];

// Print name using map function

let name = orders.map(order => order.customer);
console.log(name);

// ["Rahul", "Aman", "Priya", "Riya"]

// Print price using map function

let price = orders.map(order => order.price);
console.log(price);

// [500, 250, 400, 150]

// Filter the delivered orders using filter function for true values

let deliveredOrders = orders.filter(order => order.delivered == true);
console.log(deliveredOrders);

// [
//   { id: 1, customer: 'Rahul', food: 'Pizza', price: 500, delivered: true },
//   { id: 3, customer: 'Priya', food: 'Pasta', price: 400, delivered: true }
// ]


// Use find function to find the order with id 3

let ordersWithId3 = orders.find(order => order.id == 3);
console.log(ordersWithId3);

// { id: 3, customer: 'Priya', food: 'Pasta', price: 400, delivered: true }

// Use reduce function to calculate the total price of all orders

let totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
console.log(totalPrice);

// 1300

// Accumulator ---> Ye previous result store karta hai.
// order ---> Current array element
// 0 ---> Initial value of accumulator



// Array Destructuring ----> Array desctructuring ek syntax hai jo array ke elements ko variables me assign karne ka easy way provide karta hai.

let arr = [1, 2, 3, 4, 5];

let [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// using rest operator to get the remaining elements of the array

let [a, b, ...rest] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
console.log(rest[0]); // 3

let n1 = 10;
let n2 = 20;

console.log("Before Swap: ", n1, n2); // Before Swap: 10 20

[n1, n2] = [n2, n1];

console.log("After Swap: ", n1, n2); // After Swap: 20 10 

// Object Create Karne Ke Different Ways
// 1. Object Literal (Most Common)

let car = {
    brand: "BMW",
    model: "M5",
    year: 2024
};
// 2. Using new Object()
// let car = new Object();

car.brand = "BMW";
car.model = "M5";

console.log(car);

// Output:

// {
//   brand: 'BMW',
//   model: 'M5'
// }
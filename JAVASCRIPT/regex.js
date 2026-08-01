// Regex ---> Regex ka use pattern matching ke liye hota hai. Ye ek powerful tool hai jo strings me se specific patterns ko identify karne aur manipulate karne me madad karta hai.
// What is regex ---> Regex (Regular Expression) ek sequence of characters hai jo ek search pattern ko define karta hai. Ye pattern matching ke liye use hota hai, jaise ki strings me specific text ko find karna, replace karna, ya validate karna.

const regex = /hello/;
console.log(regex.test("hello world")); // Output: true

// Symbols in regex ---> 

// 1. ^ (Caret) ---> Ye symbol string ke start ko represent karta hai. Agar aap chahte hain ki pattern sirf string ke start me match ho, to aap ^ ka use karenge.
const regexStart = /^ACD/;
console.log(regexStart.test("ACDB")); // Output: true
console.log(regexStart.test("BACD")); // Output: false

// 2. $ (Dollar) ---> Ye symbol string ke end ko represent karta hai. Agar aap chahte hain ki pattern sirf string ke end me match ho, to aap $ ka use karenge.
const regexEnd = /ACD$/;
console.log(regexEnd.test("ABCACD")); // Output: true
console.log(regexEnd.test("ACDABC")); // Output: false

// 3. . (Dot) ---> Ye symbol kisi bhi single character ko represent karta hai, except newline character. Agar aap chahte hain ki pattern me koi bhi character match ho, to aap . ka use karenge.
const regexDot = /A.C/;
console.log(regexDot.test("ABC")); // Output: true
console.log(regexDot.test("A1C")); // Output: true
console.log(regexDot.test("AC")); // Output: false

const regexDot1 = /A..C/;
console.log(regexDot1.test("ABC")); // Output: false
console.log(regexDot1.test("A12C")); // Output: true
console.log(regexDot1.test("A1C")); // Output: false

// 4. [] (Character Class) ---> Ye symbol ek set of characters ko represent karta hai. Agar aap chahte hain ki pattern me koi bhi character match ho jo is set me ho, to aap [] ka use karenge.
const regexCharClass = /[A-Z]/;
console.log(regexCharClass.test("A")); // Output: true
console.log(regexCharClass.test("a")); // Output: false

const regexCharClass1 = /[a-z A-Z]/;
console.log(regexCharClass1.test("A")); // Output: true
console.log(regexCharClass1.test("a")); // Output: true
console.log(regexCharClass1.test("1")); // Output: false

let mail = /[a-z A-Z 0-9]+@gmail\.com$/;
console.log(mail.test("harsh@gmail.com")); // Output: true
console.log(mail.test("harsh@gmail")); // Output: false
console.log(mail.test("harsh123@gmail.com")); // Output: true

let pincode = /[0-9]{6}$/;
console.log(pincode.test("123456")); // Output: true
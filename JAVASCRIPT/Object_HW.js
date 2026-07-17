// Q1. Reference Copy (=)
// ----------------------
// Create an object student1 with:
// - name
// - age

// Assign it to student2 using (=).

// Tasks:
// 1. Change student2.name.
// 2. Print both objects.
// 3. Explain why both objects changed.

let student1 = {
    name: "Harsh",
    age: 20,
}

let student2 = student1

student2.name = "John"
console.log(student1)
console.log(student2)

// Output: { name: "John", age: 20 }
//         { name: "John", age: 20 }

// Explanation: In JavaScript, when you assign an object to another variable using the assignment operator (=), both variables reference the same object in memory.
//              Therefore, when you change a property of student2, it also affects student1 because they are both pointing to the same object. 

// Q2. Shallow Copy
// ----------------
// Create an object employee with:
// - name
// - department

// Tasks:
// 1. Create a shallow copy using the spread operator (...).
// 2. Change the department in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did or did not change.

let emp = {
    name: "Harsh",
    department: "IT",
}

let empCpy = {...emp}

empCpy.department = "HR"

console.log(emp)
console.log(empCpy)

// Output: { name: "Harsh", department: "IT" }
//         { name: "Harsh", department: "HR" }

// Explanation: In this case, we created a shallow copy of the employee object using the spread operator. 
//              This means that empCpy is a new object with its own properties, separate from emp. 
//              Therefore, when we change the department in empCpy, it does not affect emp


// Q3. Shallow Copy with Nested Object
// -----------------------------------
// Create an object user with:
// - name
// - address
//     - city
//     - pincode

// Tasks:
// 1. Create a shallow copy using the spread operator.
// 2. Change address.city in the copied object.
// 3. Print both objects.
// 4. Explain why both objects show the same city.

let user = {
    name : "Harsh",
    address : {
        city : "Jaunpur",
        pincode : 222128
    }
}

let userCpy = {...user}
userCpy.address.city = "Vadodara"

console.log(user)
console.log(userCpy)

// Output: { name: "Harsh", address: { city: "Vadodara", pincode: 222128 } }
//         { name: "Harsh", address: { city: "Vadodara", pincode: 222128 } }


// Q4. Deep Copy
// -------------
// Using the same user object:

// Tasks:
// 1. Create a deep copy using structuredClone().
// 2. Change address.pincode in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did not change.

let userDeepCpy = structuredClone(user)
userDeepCpy.address.pincode = 391760

console.log(user)
console.log(userDeepCpy)

// Output: { name: "Harsh", address: { city: "Vadodara", pincode: 222128 } }
//         { name: "Harsh", address: { city: "Vadodara", pincode: 391760 } }

// Q5. Bank Account
// ----------------
// Create an object with:
// - accountHolder
// - balance

// Create methods:
// 1. deposit(amount)
// 2. withdraw(amount)

// Requirements:
// - Update balance using this.balance.
// - Print balance after every transaction.


// Borrow function ---> Borrowing a function from one object to another object
// Borrow function method : 1. call()  2. apply()  3. bind()

// Example

const u1 = {
    name: "Alice",
    welcome(city, age){
        console.log(`Welcome ${this.name}`)
        console.log(city)
        console.log(age)
    }
}

u1.welcome("Jaunpur", 20)

const u2 = {
    name: "Bob",
}

u1.welcome.call(u2, "Vadodara", 21) // call() method is used to borrow the function from u1 to u2
u1.welcome.apply(u2, ["Jaunpur", 22])

let newWelcome = u1.welcome.bind(u2)
console.log(newWelcome)

// call(object, args, args)
// apply(objects, [args1, args2])
// bind()

// Difference between call(), apply() and bind():
// 1. call() method is used to borrow a function from one object to another object and it takes arguments as a list.
// 2. apply() method is used to borrow a function from one object to another object and it takes arguments as an array.
// 3. bind() method is used to borrow a function from one object to another object and it returns a new function with the same body and scope as the original function.
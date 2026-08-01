// Constructor function = Blueprint of house
// Object  = Actual house built from the blueprint

// Why we need CF?

// const e1 = {
//     name : "Harsh",
//     age : 22,
//     city : "Jaunpur"
// }

// const e1 = {
//     name : "John",
//     age : 22,
//     city : "Jaunpur"
// }

// const e1 = {
//     name : "Eva",
//     age : 22,
//     city : "Jaunpur"
// }

// Here we see we can create multiple objects with same properties but different values. But if we want to create 1000 objects then it will be very difficult to write the code for each object. So we can use constructor function to create multiple objects with same properties but different values.
// To solve this problem we can use constructor function. Constructor function is a function which is used to create multiple objects with same properties but different values. We can use constructor function to create multiple objects with same properties but different values.

// Normal function return only values

// Constructor function return object

// function Student(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// const p1 = new Student("Harsh", 22, "Jaunpur");


// function Employee(name, age, skill){
//     this.ename = name
//     this.eage = age
//     this.eskill = skill
// }

// const emp1 = new Employee("Harsh", 22, "JavaScript")
// const emp2 = new Employee("John", 23, "Python")
// const emp3 = new Employee("Eva", 24, "Java")

// const e1 = {
//     name : "Harsh",
//     age : 22,
//     skill : "JavaScript"
// }

function BankAccount(customerName, balance){
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    BankAccount.prototype.deposit = function(amount){
        this.balance += amount
    }

    BankAccount.prototype.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount
        }else{
            console.log("Insufficient balance")
        }
    }
}

// const ramKumar = new BankAccount("Ram Kumar", 10000)
// const johnDoe = new BankAccount("John Doe", 5000)
// // johnDoe.balance = 10000
// johnDoe.deposit(10000)
// johnDoe.withdraw(5000)
// console.log(ramKumar, johnDoe) 

const accounts = []
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const depositAmount = document.querySelector("#depositAmount")

const withdrawForm = document.querySelector("#withdrawForm")
const withdrawAccountNumber = document.querySelector("#accountNumberWithdraw")
const withdrawAmount = document.querySelector("#withdrawAmount")

accountForm.addEventListener("submit", function(e){
    e.preventDefault()
    const acc = new BankAccount(customerName.value, parseFloat(balance.value))
    accounts.push(acc)
    console.log(acc)
})

depositForm.addEventListener("submit", function(e){
    e.preventDefault()
    const account = accounts.find(account => account.accountNumber === +accountNumber.value)
    account.deposit(+depositAmount.value)
    console.log(account)
})

withdrawForm.addEventListener("submit", function(e){
    e.preventDefault()
    const account = accounts.find(account => account.accountNumber === +withdrawAccountNumber.value)
    account.withdraw(+withdrawAmount.value)
    console.log(account)
})
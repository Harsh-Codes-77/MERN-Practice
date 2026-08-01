// window object
console.log(this); // refers to the window object in a browser

// window object (non strict mode)
function abc(){
    console.log(this); // refers to the window object in a browser
}

abc();

// Strict mode remove the default window binding

// "use strict";
function xyz(){
    console.log(this); // undefined
}

xyz();

// this = object name

const student = {
    name : "John",
    showName : function(){
        console.log(this.name); // refers to the student object
    }
}

student.showName(); // John

function showCity(){
    console.log(this.city);
}

const u1 = {
    city : "Jaunpur",
    showCity
}

const u2 = {
    city : "Varanasi",
    showCity
}

u1.showCity(); // Jaunpur
u2.showCity(); // Varanasi

const u3 = {
    name : "Harsh",
    address : {
        city : "Jaunpur",
        show(){
            console.log(this.city); // refers to the address object
        }
    }
}

u3.address.show(); // Jaunpur

const u4 = {
    name : "Harsh",
    show : () => {
        console.log(this.name); // refers to the window object
    }
}

{/*<button id="btn">Click Me</button>*/}

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    console.log(this); // refers to the button element
});

// this points new object

function Employee(name){
    this.name = name;
}

const s1 = new Employee("Harsh");
console.log(s1);

const s2 = new Employee("John");
console.log(s2);


const user = {
    fname : "Harsh",
    lname : "Pathak",
    getFullName : function(){
        console.log(this)
    }
}

// user.getFullName(); // refers to the user object

const printName = user.getFullName;
printName(); // refers to the window object

// Globally this ---> Window object
// function normal call ---> window object
// Object method call ---> object
// Constructor function call ---> new object
// object ---> normal function call ---> window object
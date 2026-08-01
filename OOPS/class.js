class car {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }
}

let myCar = new car("Ford", "Mustang", 2021)

// Array(__proto__.__proto__.__proto__.__proto__)
// what it returns? --> It returns the prototype chain of the Array object, which ultimately leads to the base Object prototype. Specifically, it will return the Object prototype, which is the top-level prototype in JavaScript.


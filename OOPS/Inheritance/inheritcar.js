function Car(name, model, year, color, type) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.type = type;
}

Car.prototype.start = function () {
    console.log("Car started");
};

Car.prototype.stop = function () {
    console.log("Car stopped");
};

Car.prototype.racingCar = function () {
    console.log("Nitro boost");
};

Car.prototype.suv = function () {
    console.log("Off-road mode");
};

Car.prototype.sedan = function () {
    console.log("Comfortable ride");
};

const car1 = new Car("BMW", "M5", 2024, "Black", "Sports");
const car2 = new Car("Toyota", "Fortuner", 2023, "White", "SUV");
const car3 = new Car("Honda", "Accord", 2022, "Silver", "Sedan");

console.log(car1);
console.log(car2);
console.log(car3);

car1.start();
car1.stop();
car1.racingCar();

car2.start();
car2.suv();

car3.start();
car3.sedan();

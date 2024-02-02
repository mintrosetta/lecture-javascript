/*
    Object as argument
*/

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustange", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

displayInfo(car1);
function displayInfo(car) {
    console.log(car.model);
}

changeColor(car3, "pink")
function changeColor(car, color) {
    car.color = color;
}
console.log(car3);
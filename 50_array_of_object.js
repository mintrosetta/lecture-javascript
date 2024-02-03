/*
    Array of object
        เป็น array ที่จัดเก็บชุดของ object ไว้
*/

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const cars = [
    new Car("Mustang", 2022, "red"),
    new Car("Toyota", 2019, "blue")
];

console.log(cars)
console.log(cars[0].color);

for (let car of cars) {
    console.log(car);
}
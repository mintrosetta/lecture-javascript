/*
    staic
         ทำให้สามารถเรียกใช้งาน class ได้โดยไม่ต้องทำการสร้าง object ใหม่
*/

class Car {
    static numberOfCars = 0;

    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }

    startRace() {
        console.log("3... 2... 1...");
    }
}

const car1 = new Car("Mustange");
const car2 = new Car("Toyota");

console.log(Car.numberOfCars);
car1.startRace();
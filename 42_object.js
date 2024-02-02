/*
    Object
        กลุ่มของ properties และ method
            properties = คุณลักษณะของ object
            method = พฤติกรรมของ object

    this
        ใช้สำหรับ reference ถึง object ตัวเอง
*/

const CAR = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log("You drive the car");
    },
    brake: function() {
        console.log("You step on the brake");
    },
    getName: function() {
        console.log(`Your car name is ${this.model}`);
    }
};

console.log(CAR.model);
console.log(CAR.color);
console.log(CAR.year);

CAR.drive();
CAR.brake();
CAR.getName();
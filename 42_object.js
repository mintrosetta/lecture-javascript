/*
    Object
        กลุ่มของ properties และ method
            properties = คุณลักษณะของ object
            method = พฤติกรรมของ object
*/

const CAR = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: () => {
        console.log("You drive the car");
    },
    brake: () => {
        console.log("You step on the brake");
    }
};

console.log(CAR.model);
console.log(CAR.color);
console.log(CAR.year);

CAR.drive();
CAR.brake();